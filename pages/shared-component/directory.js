import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Directory extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <h2 id="the-component-directory">组件目录</h2>
        <p>是的。它将像你期望的那样工作。</p>
        <p>我们不需要把我们的组件放在一个特定的目录，这个目录可以是任何名称命名的。唯一的特定目录是<code>pages</code>目录.</p>
        <p>你甚至可以在<code>pages</code>目录中创建组件.</p>
        <p>这里我们不那么做，因为我们不需要一个可以直接访问到我们Header组件的URL</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>共享组件</h2>
        { this.getTemplate() }
        <Footer url="/shared-component/layout" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Directory)