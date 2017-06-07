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
      <div data-reactid="119"><h2 id="fetch-data-in-client-side">Fetch Data in Client Side</h2>
        <p>Here we can only see the message on the browser console.<br>That's because we navigated to the post page via the client side. Then fetching data from the client side is the best way to do it.</p>
        <p>If you just visit a post page directly (eg:- <a href="http://localhost:3000/p/975" target="_blank">http://localhost:3000/p/975</a>) you'll be able to see the message printed on the server but not in the client.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>为页面获取数据</h2>
        { this.getTemplate() }
        <Footer url="/fetching-data/post-page" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(FetchingDataClient)