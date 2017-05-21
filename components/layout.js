import Head from 'next/head';
import Header from './header';
import Menu from './menu';
import Footer from './footer';

const Layout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="../static/bootstrap/dist/css/bootstrap.min.css" type="text/css" />
    </Head>
    <Header />
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Menu />
        </div>
        <div className="col-md-9">
          <div className="main" style={{ "margin-bottom" : "100px" }}>
            {props.children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
    
  </div>
)

export default Layout
