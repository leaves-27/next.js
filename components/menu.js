const Navigator = [
  "起步入门",
  "在页面间的跳转",
  "共享组件的用法",
  "创建动态页面",
  "路由美化后的清晰URLs",
  "清晰URLs的服务器端支持",
  "为页面获取数据",
  "给组件添加样式",
  "部署一个Next.js App"
]

const getNavigatorList = (navigator) => {
  let arr = [];

  for(let i=0;i<navigator.length;i++){
    arr.push(<li key={i} className="list-group-item">{ navigator[i] }</li>)
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