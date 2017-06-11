import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Setup extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <h2 id="setup">Setup</h2>
        <p>In order to follow this lesson, you will need to have a simple Next.js app. For that, you can download the following example app:</p>
        <pre><code class="lang-bash hljs">git <span class="hljs-built_in">clone</span> https://github.com/arunoda/learnnextjs-demo.git
        <span class="hljs-built_in">cd</span> learnnextjs-demo
        git checkout clean-urls-ssr
        </code></pre>
        <p>You can run it with:</p>
        <pre><code class="lang-bash hljs">npm install
        npm run dev
        </code></pre>
        <p>Now you can access the app by navigating into <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</p>
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

export default withRedux(initStore,null,null)(Setup)