import router from 'next/router'

const goDonation = ()=>{

}

class Footer extends React.Component {
  render(){
    const { url } = this.props;

    return (
      <div>
        <div className="row">
          <button id="btn" type="button" className="btn btn-danger btn-lg" data-toggle="modal" data-target="#modal">如果觉得很赞，捐赠2-10元，鼓励作者继续写作</button>
        </div>
        <div className="row" style={{"marginTop":"10px"}}>
          <button type="button"  className="btn btn-success" onClick={ router.back }>上一页</button>
          <button type="button"  className="btn btn-success col-md-offset-1" style={{ "marginLeft" : "10px"}} onClick={ ()=>{ router.push(url) } }>下一页</button>
        </div>
      </div>
    )
  }
}

export default Footer