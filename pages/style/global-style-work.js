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
      <div data-reactid="128">
        <h2 id="global-styles-work">Global Styles Work</h2>
        <p>Yep that worked well. It worked, because our styles applied globally.</p>
        <p>While this feature can be incredibly handy, we always recommend trying to write scoped styles (without the global prop).</p>
        <p>Still, this is a great solution over normal style tags. With styled-jsx all necessary prefixing and CSS validation is done inside a babel plugin, so there is no additional runtime overhead.</p>
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