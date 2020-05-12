module.exports = [
  {
    key: 'pages',
    name: 'Pages',
    icon: 'library_books',
    child: [
      {
        key: 'blank',
        name: 'Blank Page',
        link: '/app/pages/blank-page'
      },
      {
        key: 'dashboard_v1',
        name: 'Dashboard',
        link: '/app'
      },
      {
        key: 'basic_table',
        name: 'Basic Table',
        link: '/app/tables/basic-table'
      },
      {
        key: 'reduxform',
        name: 'Redux Form',
        link: '/app/forms/reduxform'
      },
    ]
  },
  {
    key: 'auth',
    name: 'Auth',
    icon: 'account_circle',
    child: [
      {
        key: 'login',
        name: 'Login',
        link: '/login'
      },
      {
        key: 'register',
        name: 'Register',
        link: '/register'
      },
      {
        key: 'reset',
        name: 'Reset Password',
        link: '/reset-password'
      },
    ]
  },
  {
    key: 'error',
    name: 'Error Pages',
    icon: 'error_outline',
    child: [
      {
        key: 'not_found_page',
        name: 'Not Found Page',
        link: '/app/pages/not-found'
      },
      {
        key: 'error_page',
        name: 'Error Page',
        link: '/app/pages/error'
      },
      {
        key: 'maintenance',
        name: 'Maintenance',
        link: '/maintenance'
      },
    ]
  },
  {
    key: 'menu_levels',
    name: 'Menu Levels',
    icon: 'sort',
    child: [
      {
        key: 'level_1',
        name: 'Level 1',
        link: '/#'
      },
      {
        key: 'level_2',
        keyParent: 'menu_levels',
        name: 'Level 2',
        child: [
          {
            key: 'sub_menu_1',
            name: 'Sub Menu 1',
            link: '/#'
          },
          {
            key: 'sub_menu_2',
            name: 'Sub Menu 2',
            link: '/#'
          },
        ]
      },
    ]
  }
];
