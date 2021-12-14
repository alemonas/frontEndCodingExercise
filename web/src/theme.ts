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
}

export default theme
