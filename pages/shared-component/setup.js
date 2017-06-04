import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class SetUp extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <h2 id="setup">起步</h2>
        <p>在这一节课，我们需要一个简单的Next.js app来演示. 试着下载下面这个app例子:</p>
        <pre>
          <code class="lang-bash hljs">
            git 
            <span class="hljs-built_in">clone</span> 
            https://github.com/arunoda/learnnextjs-demo.git <br />
            <span class="hljs-built_in">cd</span> learnnextjs-demo <br />
            git checkout navigate-between-pages
          </code>
        </pre>
        <p>你可以用下面的命令运行它:</p>
        <pre>
          <code class="lang-bash hljs">
            npm install <br />
            npm run dev
          </code>
        </pre>
        <p>现在你可以通过打开<a href="http://localhost:3000" target="_blank">http://localhost:3000</a>访问这个app.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>共享组件</h2>
        { this.getTemplate() }
        <Footer url="/shared-component/header-component-create" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(SetUp)