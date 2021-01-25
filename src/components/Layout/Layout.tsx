const Layout: React.FC = ({ children }) => (
  <div>
    <header>
      <h1 className="text-3xl text-center font-bold p-5 text-white bg-yellow-500">Muscudo</h1>
    </header>
    <main>{children}</main>
  </div>
)
export default Layout
