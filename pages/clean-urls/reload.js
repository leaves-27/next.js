import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Reload extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <h2 id="reload">重载</h2>
        <p>现在回到首页: <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a><br />然后点击第一个投票标题.页面将跳转到投票页面.</p>
        <p><img style={{"max-width":"100%"}} src="https://cloud.githubusercontent.com/assets/50838/24586820/b65be244-17c6-11e7-87fd-d6880152261e.png" alt="" /></p>
        <p>然后重新刷新浏览器. 将发生什么?</p>
        {
          Question({
            "answers" : [{
              id : "01",
              desc : "页面将像期望的那样渲染第一条博客投票"
            },{
              id : "02",
              desc : "它将加载页面，但是一直显示正在加载中"
            },{
              id : "03",
              desc : "它将抛出500错误"
            },{
              id : "04",
              desc : "它将抛出404错误"
            }]
          })
        }  
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>经过路由美化后的清晰URLs</h2>
        { this.getTemplate() }
        <Footer url="/clean-urls/404" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Reload)