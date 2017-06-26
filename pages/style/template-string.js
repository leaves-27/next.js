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
        <h2 id="styles-should-go-inside-template-strings">在模板字符串中添加样式应该成为过去式</h2>
        <p>添加jsx进行样式化像一个babel插件一样工作.它将在构建过程中解析所有的CSS. (我们的样式应用没有任何时间开销)</p>
        <p>在styled-jsx内，它也支持约束. 在将来,你将可能在styled-jsx内应用一些动态变量.那个也是为什么CSS需要而不是放在一个模板字符串内的原因. (<code dangerouslySetInnerHTML={{
          __html : '{``}'
        }}></code>)</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>添加样式</h2>
        { this.getTemplate() }
        <Footer url="/style/nested-component" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Index)