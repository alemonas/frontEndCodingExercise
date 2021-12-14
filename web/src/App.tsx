import { ThemeProvider } from "@theme-ui/core"

import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">My App</div>
    </ThemeProvider>
  )
}

export default App
