const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Next.js</a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><span style={{ "color":"#999"}}>本书译自Learning Next.js英文版，如需英文版，请访问</span><a style={{ "display":"inline-block","padding":"15px 2px","color":"#2196F3" }} href="https://learnnextjs.com/basics/getting-started" target="_blank">英文版</a></li>
          <li><a href="javascript:void(0)">联系方式:1715302456@qq.com</a></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header