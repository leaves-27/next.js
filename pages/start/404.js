import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Page_404 extends React.Component {
  
  render () {

    return (
      <Layout>
        <h4 style={{ "marginBottom" : "40px" }}>404 页面</h4>
        <div>
          <p>你将看到像这样的一个404页面:</p>
          <p><img style={{ "maxWidth":"100%" }} src="https://cloud.githubusercontent.com/assets/50838/24114002/ac4786f2-0dc4-11e7-8d84-b6f33c8f9aae.png" alt="Next.js 404 Page" /></p>
        </div>
        <Footer url="/start/first" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Page_404)