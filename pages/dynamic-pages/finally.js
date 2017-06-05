import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class PassData extends React.Component {
  
  getTemplate(){
    
    return (
      <div>
        <h2 id="finally">结束</h2>
        <p>现在我们已经学习了如何用查询字符串创建动态页面.但这仅仅只是一个开始.</p>
        <p>一个动态页面可能需要渲染更多信息,我们不能通过查询字符串来传递所有内容.或者说我们可能想要这样一个更清晰明了的URLs: <a href="http://localhost:3000/blog/hello-nextjs" target="_blank">http://localhost:3000/blog/hello-nextjs</a></p>
        <p>在下来的课程中，我们学习这些。查询字符串是其他所有内容的基础。</p>
      </div>
    )
  }
  render () {
    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>创建动态页面</h2>
        { this.getTemplate() }
        <Footer url="/clean-urls/" next={{ text:"下一课" }} />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(PassData)