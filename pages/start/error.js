import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Error extends React.Component {
  
  render () {

    return (
      <Layout>
        <h4 style={{ "marginBottom" : "40px" }}>报错</h4>
        <div>
          <p>默认的，Next.js将像那样跟踪错误信息并在浏览器中显示它. 这对于你快速的定位错误并解决它是非常有帮助的.</p>
          <p>一旦你解决了这个问题,这页面将不用整页重载，而是局部立即刷新。我们使用Webpack的<a href="https://webpack.js.org/concepts/hot-module-replacement/" target="_blank">热替换</a>来达到这目的, 它在Next.js中是默认支持的.</p>
        </div>
        <Footer url="/start/finally" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Error)