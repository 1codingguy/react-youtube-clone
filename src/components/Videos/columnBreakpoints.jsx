import { createTheme } from '@material-ui/core';

export const columnBreakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 336,
      sm: 496,
      md: 872,
      lg: 1128,
      // xl: 1952,   // 5 column - can't do because 12/5 is not whole number
      xl: 2288, // 6 column - 2 grids
    },
  },
});
