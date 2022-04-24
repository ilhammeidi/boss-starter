import themePalette from 'boss-api/palette/themePaletteMode';
const applicationTheme = (color, mode, direction) => ({
  direction,
  palette: {
    type: mode,
    primary: themePalette(color, mode).palette.primary,
    secondary: themePalette(color, mode).palette.secondary,
    action: {
      hover: mode === 'dark' ? 'rgba(80,80,80, 0.9)' : 'rgba(80,80,80, 0.05)',
      hoverOpacity: 0.05
    }
  },
  typography: {
    useNextVariants: true,
  },
  shade: {
    light: '0 10px 15px -5px rgba(62, 57, 107, .07)',
  },
  glow: {
    light: `0 2px 20px -5px ${themePalette(color, mode).palette.primary.main}`,
    medium: `0 2px 40px -5px ${themePalette(color, mode).palette.primary.main}`,
    dark: `0 2px 40px 0px ${themePalette(color, mode).palette.primary.main}`,
  },
  rounded: {
    small: '8px',
    medium: '12px',
    big: '20px'
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
      colorPrimary: {
        backgroundColor:
          mode === 'dark'
            ? themePalette(color, mode).palette.primary.dark
            : themePalette(color, mode).palette.primary.main,
      },
    },
  }
});

export default applicationTheme;
