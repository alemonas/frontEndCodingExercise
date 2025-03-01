import {swiss} from '@theme-ui/presets'
import {Theme} from 'theme-ui'

const theme: Theme = {
  ...swiss,
  styles: {
    ...swiss.styles,
  },
  text: {
    ...swiss.text,
    table: {
      previousPaidExperience: {
        padding: 1,
      },
    },
  },
  badges: {
    tags: {
      bg: 'secondary',
      padding: 1,
      mr: 1,
    },
  },
  forms: {
    input: {
      table: {
        padding: 2,
        bg: 'background',
      },
    },
  },
}

export default theme
