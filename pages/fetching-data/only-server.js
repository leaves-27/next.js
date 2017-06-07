import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Server extends React.Component {
  
  getTemplate(){
    let props = '`/p/<span class="hljs-variable">${show.id}</span>`} href={`/post?id=<span class="hljs-variable">${show.id}</span>`'
    let span = '`Show data fetched. Count: <span class="hljs-subst">${data.length}</span>`'
    let span02 = '`Show data fetched. Count: <span class="hljs-variable">${data.length}</span>`'
    
    return (
      <div>
        <h2 id="only-on-the-server">仅仅在服务器端</h2>
        <p>在这个案例中，这个信息仅仅在服务器端控制台输出了.</p>
        <p>这是因为我们是在服务器端渲染了这个页面.<br/>所以,在客户端我们已经有了这个数据，没有理由再去客户端获取它.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>为页面获取数据</h2>
        { this.getTemplate() }
        <Footer url="/fetching-data/post-page" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Server)