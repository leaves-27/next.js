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
        <p>现在你已经学习了Next.js最重要的功能中之一。它为一般的数据获取并在服务器端渲染变的更完美。</p>
        <p>我们已经学习了<code>getInitialProps</code>的基本用法，它对大多数情况已经足够了。想要了解更多的信息，可以看关于<a href="https://github.com/zeit/next.js#fetching-data-and-component-lifecycle" target="_blank">数据获取</a>的Next.js文档.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>为页面获取数据</h2>
        { this.getTemplate() }
        <Footer url="/style/" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Finally)