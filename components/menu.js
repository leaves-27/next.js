import Link from 'next/link'
const linkStyle = {
  marginRight: 15
}

const Navigator = [
  {
    url:"/",
    desc:"起步入门"
  },
  {
    url:"/navigate/",
    desc:"在页面间的跳转"
  },
  {
    url:"/shared-component/",
    desc:"共享组件的用法"
  },{
    url:"/dynamic-pages/",
    desc:"创建动态页面"
  },{
    url:"/clean-urls/",
    desc:"经过路由美化后的清晰URLs"
  },{
    url:"/server-side-support/",
    desc:"清晰URLs的服务器端支持"
  },{
    url:"/fetching-data/",
    desc:"为页面获取数据"
  },{
    url:"/style/",
    desc:"给组件添加样式"
  }
]

const getNavigatorList = (navigator) => {
  let arr = [];

  for(let i=0;i<navigator.length;i++){
    arr.push(
      <li key={i} className="list-group-item">
        <Link href={navigator[i].url}>
          <a style={linkStyle}>{ navigator[i].desc }</a>
        </Link>
      </li>
    )
  }
  
  return arr;
}
const Menu = (props) => (
    <div>
      <h3></h3>
      <ul className="list-group">
        { getNavigatorList(Navigator) }
      </ul>
    </div>
)

export default Menu