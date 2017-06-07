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
        <p>现在我们知道了如何创建一个好的Next.js app和如何使用Next.js路由API的所有优点.</p>
        <p>在实际情况中，我们常常需要从远程数据源获取数据。Next.js内置了一个标准的API用来为页面获取数据。具体是用一个被叫做<code>getInitialProps</code>的异步函数来实现它.</p>
        <p>下来,我们通过一个远程数据源为给定的页面获取数据并把它作为属性传到我们的页面。 我们可以为我们的页面添加<code>getInitialProps</code> 方法，它可以在服务器端和客户端工作. 也就是说, Next.js 在客户端和服务器端都可以用它.</p>
        <p>在这一节课中,使用 <code>getInitialProps</code>, 我们构建一个显示Batman电视表演信息的app，将利用这个开源的<a href="http://www.tvmaze.com/api" target="_blank">TVmaze API</a>.</p>
        <p><img style={{"max-width":"100%"}}  src="https://cloud.githubusercontent.com/assets/50838/26300776/bbf275ee-3efc-11e7-8304-df96c7c7cad5.png" alt="" /></p>
        <p>让我们一起来开始吧.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>为页面获取数据</h2>
        { this.getTemplate() }
        <Footer url="/fetching-data/setup" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Index)