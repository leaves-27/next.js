import Modal from './modal'

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Next.js</a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><span style={{ "color":"#999"}}>本书译自Learning Next.js英文版，如需英文版，请访问</span><a style={{ "display":"inline-block","padding":"15px 2px","color":"#2196F3" }} href="https://learnnextjs.com/basics/getting-started" target="_blank">英文版</a></li>
          <li><span style={{ "marginTop":"10px","marginLeft":"10px" }} type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal">打赏</span></li>
          <li><a href="javascript:void(0)">QQ邮箱:1715302456@qq.com</a></li>
        </ul>
      </div>
    </div>
    <Modal />
  </nav>
)

export default Header