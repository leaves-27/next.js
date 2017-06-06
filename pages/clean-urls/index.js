import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Index extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <p>在前一节中,我们学习了如何用查询字符串创建动态页面。<br />其中，我们的博客投票的一个链接看起来像这样:</p>
        <p><a href="http://localhost:3000/post?title=Hello%20Next.js" target="_blank">http://localhost:3000/post?title=Hello%20Next.js</a></p>
        <p>但是那个URL看起来不是很漂亮的.<br />我们怎么做才可以使其看起来像这样呢?</p>
        <p><a href="http://localhost:3000/p/hello-nextjs" target="_blank">http://localhost:3000/p/hello-nextjs</a></p>
        <p>
          <img style={{"max-width":"100%"}} src="https://cloud.githubusercontent.com/assets/50838/24586820/b65be244-17c6-11e7-87fd-d6880152261e.png" alt="" /><br />
          它是极好的, 对吗?<br />
          这是这节课我们将要试着去完成的内容。
        </p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>经过路由美化后的清晰URLs</h2>
        { this.getTemplate() }
        <Footer url="/clean-urls/setup" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Index)