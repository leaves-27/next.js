import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class FetchingDataClient extends React.Component {
  
  getTemplate(){

    return (
      <div>
        <h2 id="fetch-data-in-client-side">在客户端获取数据</h2>
        <p>这人我们仅仅在浏览器端的控制台看到这个信息.<br />原因是因为其是通过客户端路由跳转到博客投票页面. 然后从客户端获取数据.</p>
        <p>如果你仅仅之间访问这个投票页面(例如:- <a href="http://localhost:3000/p/975" target="_blank">http://localhost:3000/p/975</a>) 你将在仅仅在服务器端控制台看到这条信息而不是在客户端控制台.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>为页面获取数据</h2>
        { this.getTemplate() }
        <Footer url="/fetching-data/finally" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(FetchingDataClient)