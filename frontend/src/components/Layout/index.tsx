import './layout.css';

function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
