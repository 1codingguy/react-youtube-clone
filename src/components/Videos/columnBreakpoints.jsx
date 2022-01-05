import { createTheme } from '@material-ui/core'
import {
  FOUR_COL_MIN_WIDTH,
  SIX_COL_MIN_WIDTH,
  THREE_COL_MIN_WIDTH,
  TWO_COL_MIN_WIDTH,
} from '../../utils/utils'

export const columnBreakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: TWO_COL_MIN_WIDTH,
      md: THREE_COL_MIN_WIDTH,
      lg: FOUR_COL_MIN_WIDTH,
      // xl: 1952,   // 5 column - can't do because 12/5 is not whole number
      xl: SIX_COL_MIN_WIDTH, // 6 column - 2 grids
    },
  },
})
