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
        <h2 id="what-next">Next是什么？</h2>
        <p>这儿，我们刚刚用styled-js修饰了这个界面，其实有许多方法可以做到。更多信息参考 <a href="https://github.com/zeit/styled-jsx" target="_blank">styled-jsx</a> GitHub仓库.</p>
        <p>有大量的其他的为Next.js变的漂亮的样式化方案<a href="https://github.com/zeit/next.js#css-in-js" target="_blank">other styling solutions</a>也可以看看它们.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>清晰URLs的服务器端支持</h2>
        { this.getTemplate() }
        <Footer url="/server-side-support/server" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Index)