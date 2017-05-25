import router from 'next/router'

const goDonation = ()=>{

}

class Footer extends React.Component {
  render(){
    const { url,prev,next } = this.props;
    let isPrev;
    let isNext;
    let classname = "btn btn-danger";

    if (prev=="false"){
      isPrev = "none"
    }else{
      isPrev = "inline-block"
    }

    if(next=="false"){
      isNext = "none"
    }else{
      isNext = "inline-block"
    }

    if(!(prev == "false" && next == "false")) {
      classname = classname + " col-md-offset-1"
    }

    return (
      <div className="col-md-12">
        <div className="row" style={{
          "display":"block",
          "maxWidth":"580px",
          "backgroundColor":"rgb(255, 248, 225)",
          "border":"1px solid rgb(255, 224, 178)",
          "padding":"5px 10px",
          "marginTop":"20px",
          "color":"#000"
        }}>
          如果觉得很赞，打赏2-10元，鼓励作者继续卖力写作
        </div>
        <div className="row" style={{"marginTop":"10px"}}>
          <button type="button" style={{ "display" : isPrev }} className="btn btn-success" onClick={ router.back }>上一页</button>
          <button type="button" className="btn btn-success col-md-offset-1" style={{ "marginLeft" : "10px","display" : isNext }} onClick={ ()=>{ router.push(url) } }>下一页</button>
          <button id="btn" type="button" className={ classname } data-toggle="modal" data-target="#modal">打赏</button>
        </div>
      </div>
    )
  }
}

export default Footer