export default function Layout({ children }) {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="container">
          <h1 className="site-title">Error 404: Page Not Found</h1>
          <nav className="site-nav">
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>
      <main className="container content-area">
        {children}
      </main>
      <footer className="site-footer">
        <div className="container">Converted from Blogger theme · © Error 404: Page Not Found</div>
      </footer>
    </div>
  )
}
