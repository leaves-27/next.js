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
        <p>在上一节课中,我们学习了如何为我们的app创建清晰的URLs. 即我们可以有这样的URLs:</p>
        <p><a href="http://localhost:3000/p/my-blog-post" target="_blank">http://localhost:3000/p/my-blog-post</a></p>
        <p>但是它仅仅在客户端跳转起作用.当我们重新载入页面时,就报404了.<br />这是因为在pages目录中没有真实的被<code>p/my-blog-post</code>调用的页面.</p>
        <p><img style={{"max-width":"100%"}} src="https://cloud.githubusercontent.com/assets/50838/24919433/475417bc-1f01-11e7-9fae-a17030d3d051.png" alt="" /></p>
        <p>我们用<a href="https://github.com/zeit/next.js#custom-server-and-routing" target="_blank">Next.js的常用服务器端 API</a>可以很容易的解决这个问题.<br />让我们一起来看看我们是怎样来解决它的.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>清晰URLs的服务器端支持</h2>
        { this.getTemplate() }
        <Footer url="/server-side-support/first" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Index)