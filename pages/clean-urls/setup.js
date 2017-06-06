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
        <h2 id="setup">开始</h2>
        <p>首先，我们需要一个简单的Next.js app来玩弄.试着下载下面的app例子:</p>
        <pre>
        <code class="lang-sh hljs bash">
          git <span class="hljs-built_in">clone</span> https://github.com/arunoda/learnnextjs-demo.git <br />
          <span class="hljs-built_in">cd</span> learnnextjs-demo<br />
          git checkout create-dynamic-pages<br />
        </code>
        </pre>
        <p>你可以用下面的命令运行它:</p>
        <pre>
          <code class="lang-sh hljs bash">
            npm install<br />
            npm run dev
          </code>
        </pre>
        <p>现在你可以通过<a href="http://localhost:3000/" target="_blank">http://localhost:3000</a>来访问这个app.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>经过路由美化后的清晰URLs</h2>
        { this.getTemplate() }
        <Footer url="/clean-urls/route-mask" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Setup)