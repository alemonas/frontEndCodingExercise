import {Text, ThemeProvider} from 'theme-ui'
import Layout from './Layout'

import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Text>Table goes here</Text>
      </Layout>
    </ThemeProvider>
  )
}

export default App
