const palette = {
  purpleRedTheme: {
    palette: {
      primary: {
        light: '#EDE7F6',
        main: '#673AB7',
        dark: '#512DA8',
        contrastText: '#fff',
      },
      secondary: {
        light: '#FCE4EC',
        main: '#EC407A',
        dark: '#C2185B',
        contrastText: '#fff',
      },
    },
  },
  greenTheme: {
    palette: {
      primary: {
        light: '#F1F8E9',
        main: '#689F38',
        dark: '#33691E',
        contrastText: '#fff',
      },
      secondary: {
        light: '#FFECB3',
        main: '#FF8F00',
        dark: '#E65100',
        contrastText: '#fff',
      },
    },
  },
  magentaTheme: {
    palette: {
      primary: {
        light: '#FCE4EC',
        main: '#EC407A',
        dark: '#D81B60',
        contrastText: '#fff',
      },
      secondary: {
        light: '#E0F7FA',
        main: '#00BCD4',
        dark: '#0097A7',
        contrastText: '#fff',
      },
    },
  },
  purpleTheme: {
    palette: {
      primary: {
        light: '#EDE7F6',
        main: '#AB47BC',
        dark: '#8E24AA',
        contrastText: '#fff',
      },
      secondary: {
        light: '#F1F8E9',
        main: '#7CB342',
        dark: '#558B2F',
        contrastText: '#fff',
      },
    },
  },
  blueTheme: {
    palette: {
      primary: {
        light: '#E8EAF6',
        main: '#3F51B5',
        dark: '#283593',
        contrastText: '#fff',
      },
      secondary: {
        light: '#B3E5FC',
        main: '#03A9F4',
        dark: '#0277BD',
        contrastText: '#fff',
      },
    },
  },
  orangeTheme: {
    palette: {
      primary: {
        light: '#FFE0B2',
        main: '#EF6C00',
        dark: '#E65100',
        contrastText: '#fff',
      },
      secondary: {
        light: '#F3E5F5',
        main: '#9C27B0',
        dark: '#7B1FA2',
        contrastText: '#fff',
      },
    },
  },
  cyanTheme: {
    palette: {
      primary: {
        light: '#E0F7FA',
        main: '#0097A7',
        dark: '#00838F',
        contrastText: '#fff',
      },
      secondary: {
        light: '#F1F8E9',
        main: '#8BC34A',
        dark: '#33691E',
        contrastText: '#fff',
      },
    },
  },
  redTheme: {
    palette: {
      primary: {
        light: '#FFEBEE',
        main: '#EF5350',
        dark: '#E53935',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ECEFF1',
        main: '#607D8B',
        dark: '#455A64',
        contrastText: '#fff',
      },
    },
  },
  skyBlueTheme: {
    palette: {
      primary: {
        light: '#E3F2FD',
        main: '#2196F3',
        dark: '#1565C0',
        contrastText: '#fff',
      },
      secondary: {
        light: '#A7FFEB',
        main: '#00BFA5',
        dark: '#00796B',
        contrastText: '#fff',
      },
    },
  },
  greyTheme: {
    palette: {
      primary: {
        light: '#ECEFF1',
        main: '#607D8B',
        dark: '#455A64',
        contrastText: '#fff',
      },
      secondary: {
        light: '#F5F5F5',
        main: '#757575',
        dark: '#424242',
        contrastText: '#fff',
      },
    },
  },
  greenNatureTheme: {
    palette: {
      primary: {
        light: '#E8F5E9',
        main: '#43A047',
        dark: '#2E7D32',
        contrastText: '#fff',
      },
      secondary: {
        light: '#E0F2F1',
        main: '#009688',
        dark: '#00796B',
        contrastText: '#fff',
      },
    },
  },
  yellowCyanTheme: {
    palette: {
      primary: {
        light: '#FFF3E0',
        main: '#FF8F00',
        dark: '#E65100',
        contrastText: '#fff',
      },
      secondary: {
        light: '#E0F7FA',
        main: '#00BCD4',
        dark: '#006064',
        contrastText: '#fff',
      },
    },
  }
};


const themePalette = (color) => ({
  palette: {
    primary: palette[color].palette.primary,
    secondary: palette[color].palette.secondary,
  },
  typography: {
    useNextVariants: true,
  },
});

export default themePalette;
