import Header from './header';
import Menu from './menu';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Layout = (props) => (
  <div>
    <link rel="stylesheet" href="../static/bootstrap/dist/css/bootstrap.min.css" type="text/css" />
    <Header />
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Menu />
        </div>
        <div className="col-md-8 col-md-offset-1">
          <div className="main">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Layout
