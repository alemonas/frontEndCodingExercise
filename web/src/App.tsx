import {ThemeProvider} from 'theme-ui'

import ContentCreator from 'components/ContentCreator'
import Layout from 'Layout'
import theme from 'theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <ContentCreator />
      </Layout>
    </ThemeProvider>
  )
}

export default App
