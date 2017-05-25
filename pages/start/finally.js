import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Finally extends React.Component {
  render () {

    return (
      <Layout>
        <h4 style={{ "marginBottom" : "40px" }}>你很棒</h4>
        <div>
          <p>
            看来你已经构建了你的第一个Next.js app!你觉得怎么样？<br />
            如果你喜欢它, 我们更深入的来了解下.
          </p>
          <p>
            如果你不喜欢它，告诉我们<br />
            你可以在我们的
            <a href="https://github.com/zeit/next.js" target="_blank">GitHub repo</a> 
            或者在我们的
            <a href="https://zeit.chat/" target="_blank">Slack channel</a>提
            <a href="https://github.com/zeit/next.js/issues" target="_blank">问题</a> , #next.
          </p>
        </div>
        <Footer url="/navigate/index" next={{ text:"下一课" }} />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Finally)