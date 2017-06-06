import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Page_404 extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <h2 id="404">404</h2>
        <p>它给我们一个404错误. 原因是服务器端没有如此的页面。<br />服务器端将尝试加载<code>p/hello-nextjs</code>页面,但是我们仅仅有两个页面: <code>index.js</code> 和 <code>post.js</code>.</p>
        <p>因此,我们不能在产品环境中运行这个app.我们需要解决它。</p>
        <p><strong>Next.js的 <a href="https://github.com/zeit/next.js#custom-server-and-routing" target="_blank">常用服务器端API</a>为这个问题提供了解决方案.</strong></p>
        <p>在下一节课中，我们将学习如何用它.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>经过路由美化后的清晰URLs</h2>
        { this.getTemplate() }
        <Footer url="/server-side-support/" next={{ text:"下一课" }} />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Page_404)