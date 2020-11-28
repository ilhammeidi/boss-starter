import { fromJS, List } from 'immutable';
import MenuContent from 'ba-api/menu';
import {
  TOGGLE_SIDEBAR,
  OPEN_SUBMENU,
  CHANGE_THEME,
  LOAD_PAGE
} from 'ba-actions/actionTypes';

const initialState = {
  sidebarOpen: true,
  theme: 'skyBlueTheme',
  pageLoaded: false,
  palette: List([
    { name: 'Purple Red', value: 'purpleRedTheme' },
    { name: 'Natural Green Orange', value: 'greenTheme' },
    { name: 'Blue Ocean', value: 'blueTheme' },
    { name: 'Blue Sky', value: 'skyBlueTheme' },
    { name: 'Sweet Magenta Cyan', value: 'magentaTheme' },
    { name: 'Violet Green', value: 'purpleTheme' },
    { name: 'Vintage Yellow', value: 'yellowCyanTheme' },
    { name: 'Orange Violet', value: 'orangeTheme' },
    { name: 'Cyan Green', value: 'cyanTheme' },
    { name: 'Red Silver', value: 'redTheme' },
    { name: 'Grey', value: 'greyTheme' },
    { name: 'Green Nature', value: 'greenNatureTheme' },
  ]),
  subMenuOpen: []
};

const getMenus = menuArray => menuArray.map(item => {
  if (item.child) {
    return item.child;
  }
  return false;
});

const setNavCollapse = (arr, curRoute) => {
  let headMenu = 'not found';
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j].link === curRoute) {
        headMenu = MenuContent[i].key;
      }
    }
  }
  return headMenu;
};

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return state.withMutations((mutableState) => {
        mutableState.set('sidebarOpen', !state.get('sidebarOpen'));
      });
    case OPEN_SUBMENU:
      return state.withMutations((mutableState) => {
        // Set initial open parent menu
        const activeParent = setNavCollapse(
          getMenus(MenuContent),
          action.initialLocation
        );

        // Once page loaded will expand the parent menu
        if (action.initialLocation) {
          mutableState.set('subMenuOpen', List([activeParent]));
          return;
        }

        // Expand / Collapse parent menu
        const menuList = state.get('subMenuOpen');
        if (menuList.indexOf(action.key) > -1) {
          if (action.keyParent) {
            mutableState.set('subMenuOpen', List([action.keyParent]));
          } else {
            mutableState.set('subMenuOpen', List([]));
          }
        } else {
          mutableState.set('subMenuOpen', List([action.key, action.keyParent]));
        }
      });
    case CHANGE_THEME:
      return state.withMutations((mutableState) => {
        mutableState.set('theme', action.theme);
      });
    case LOAD_PAGE:
      return state.withMutations((mutableState) => {
        mutableState.set('pageLoaded', action.isLoaded);
      });
    default:
      return state;
  }
}
