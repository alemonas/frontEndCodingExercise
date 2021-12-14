/** @jsxImportSource theme-ui */

interface LayoutProps {
  children: JSX.Element
}

const Layout = (props: LayoutProps) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      variant: 'layout.root',
    }}
  >
    <header
      sx={{
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        variant: 'layout.header',
      }}
    >
      Header content
    </header>
    <main
      sx={{
        flex: '1 1 auto',
        variant: 'layout.main',
        width: '100%',
      }}
    >
      <div
        sx={{
          maxWidth: 768,
          mx: 'auto',
          px: 3,
          variant: 'layout.container',
        }}
      >
        {props.children}
      </div>
    </main>
    <footer
      sx={{
        width: '100%',
        variant: 'layout.footer',
      }}
    >
      Footer content
    </footer>
  </div>
)

export default Layout
