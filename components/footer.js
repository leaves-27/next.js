import router from 'next/router'

const goDonation = ()=>{

}

class Footer extends React.Component {
  render(){
    const { url,prev,next } = this.props;

    let newPrev = {
      isShow : true,
      text : "上一页"
    }

    let newNext = {
      isShow : true,
      text : "下一页"
    }

    if(prev && !prev.isShow && prev.isShow!=undefined){
      newPrev.isShow = false;
    }

    if(prev && prev.text) {
      newNext.text = next.text;
    }

    if(next && !next.isShow && next.isShow!=undefined) {
      newNext.isShow = false;
    }

    if(next && next.text) {
      newNext.text = next.text;
    }

    let nextMarLeft = newPrev.isShow ? "10px" : "auto";
    let dsMarLeft = newNext.isShow ? "30px" : "auto";

    return (
      <div className="col-md-12">
        <div className="row" style={{
          "display":"block",
          "maxWidth":"580px",
          "backgroundColor":"rgb(255, 248, 225)",
          "border":"1px solid #c9302c",
          "padding":"5px 10px",
          "marginTop":"20px",
          "color":"#c9302c"
        }}>
          如果觉得文章不错，打赏1-10元给作者，鼓励作者继续卖力写作
        </div>
        <div className="row" style={{"marginTop":"10px"}}>
          <button type="button" style={{ "display" : (newPrev.isShow ? "inline-block":"none" ) }} className="btn btn-success" onClick={ router.back }>{ newPrev.text }</button>
          <button style={{ "display" : (newNext.isShow ? "inline-block":"none" ),"marginLeft" : nextMarLeft }}  type="button" className="btn btn-success" onClick={ ()=>{ router.push(url) } }>{ newNext.text }</button>
          <button style={{ "marginLeft" : dsMarLeft }}  id="btn" type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal">打赏</button>
        </div>
      </div>
    )
  }
}

export default Footer