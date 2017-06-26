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
        <h2 id="global-styles-work">全局样式工作原理</h2>
        <p>是的，那个工作的很好.它工作了，因为我们应用的是全局样式.</p>
        <p>虽然这个功能是极其方便的,但是我们还是推荐在一个作用域里面写样式(没有全局属性).</p>
        <p>诚然，标准的样式标签是一个好的解决方案。带有styled-jsx的方案所有需要的前缀和CSS验证都是在一个babel插件里面被完成，因此没有传统的运行时开销。.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>添加样式</h2>
        { this.getTemplate() }
        <Footer url="/style/what-next" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Index)