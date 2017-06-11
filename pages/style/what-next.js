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
        <h2 id="what-next">What Next</h2>
        <p>We have just scratched the surface with styled-jsx here, and there is a lot more that you can do. Refer to the <a href="https://github.com/zeit/styled-jsx" target="_blank">styled-jsx</a> GitHub repo for more info.</p>
        <p>There are a number of <a href="https://github.com/zeit/next.js#css-in-js" target="_blank">other styling solutions</a> for Next.js that are pretty good, so have a look at them too.</p>
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