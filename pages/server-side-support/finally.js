import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Finally extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <h2 id="finally">结束</h2>
        <p>这儿，我们仅仅用Next.js常用服务端API创建了一个路由. 随即我们为清晰的URLs添加了服务器端支持. 像这样,你可以创建许多你想要的路由。</p>
        <p>不限制一定要使用 <a href="https://expressjs.com/" target="_blank">Express</a>，你也可以用其他一些Node.js服务器端框架。你可以看看Next.js的<a href="https://github.com/zeit/next.js#custom-server-and-routing" target="_blank">常用服务端API</a>文档。</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>清晰URLs的服务器端支持</h2>
        { this.getTemplate() }
        <Footer url="/fetching-data/" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Finally)