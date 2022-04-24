module.exports = [
  {
    key: 'pages',
    name: 'Pages',
    icon: 'library_books',
    child: [
      {
        key: 'other_page',
        name: 'Welcome Page',
        title: true,
      },
      {
        key: 'blank',
        name: 'Blank Page',
        link: '/app',
        icon: 'video_label'
      },
      {
        key: 'main_page',
        name: 'Sample Page',
        title: true,
      },
      {
        key: 'dashboard',
        name: 'Dashboard',
        link: '/app/pages/dashboard',
        icon: 'settings_system_daydream'
      },
      {
        key: 'form',
        name: 'Form',
        link: '/app/pages/form',
        icon: 'border_color',
      },
      {
        key: 'table',
        name: 'Table',
        link: '/app/pages/table',
        icon: 'grid_on'
      },
      {
        key: 'maintenance',
        name: 'Maintenance',
        link: '/maintenance',
        icon: 'build'
      },
      {
        key: 'coming_soon',
        name: 'Coming Soon',
        link: '/coming-soon',
        icon: 'polymer'
      },
    ]
  },
  {
    key: 'auth',
    name: 'Auth Page',
    icon: 'account_box',
    child: [
      {
        key: 'auth_page',
        name: 'User Authentication',
        title: true,
      },
      {
        key: 'login',
        name: 'Login',
        link: '/login',
        icon: 'account_box'
      },
      {
        key: 'register',
        name: 'Register',
        link: '/register',
        icon: 'border_color'
      },
      {
        key: 'reset',
        name: 'Reset Password',
        link: '/reset-password',
        icon: 'undo'
      },
    ]
  },
  {
    key: 'errors',
    name: 'Errors',
    icon: 'error',
    child: [
      {
        key: 'errors_page',
        name: 'Errors Pages',
        title: true,
      },
      {
        key: 'not_found_page',
        name: 'Not Found Page',
        link: '/app/pages/not-found',
        icon: 'pets'
      },
      {
        key: 'error_page',
        name: 'Error Page',
        link: '/app/pages/error',
        icon: 'flash_on'
      },
    ]
  },
  {
    key: 'menu_levels',
    name: 'Menu Levels',
    multilevel: true,
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
  },
  {
    key: 'blank_single',
    name: 'Single Menu',
    icon: 'notes',
    linkParent: '/app',
  }
];
