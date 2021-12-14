import {Text, ThemeProvider} from 'theme-ui'

import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text variant="heading">My App</Text>
    </ThemeProvider>
  )
}

export default App
