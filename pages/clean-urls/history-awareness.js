import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class RouteMask extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <h2 id="history-awareness">历史记录</h2>
        <p>正如你看到的,路由美化在浏览器历史中工作的非常好.<br />你做的所有事情仅仅是为链接添加"as"属性.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>经过路由美化后的清晰URLs</h2>
        { this.getTemplate() }
        <Footer url="/clean-urls/reload" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(RouteMask)