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
        <p>到目前为止，给你的组件添加一些样式仍然是功能完成后才需要考虑的事情。 但是你的app需要一些样式.</p>
        <p>对一个React app,有许多种不同的技术可以为其添加样式,它们大体上可以被划分为两类:</p>
        <ol>
          <li>基于传统的css文件添加样式(包括 SASS, PostCSS 等等)</li>
          <li><a href="https://github.com/MicheleBertoli/css-in-js" target="_blank">在JS中写CSS</a>来添加样式</li>
        </ol>
        <p>由于, 基于传统的css文件添加样式的方法在实际使用中有一大堆问题(特别是在服务器端渲染), 所谓我们建议在为Next.js应用添加样式时，避免使用这种方式.</p>
        <p>代替的是我们推荐在JS中写CSS,它可以样式化这个组件，而不导入css文件.</p>
        <p>Next.js用一个被叫做<a href="https://github.com/zeit/styled-jsx" target="_blank">styled-jsx</a>的在JS中写CSS的框架来做这个, specifically designed to make your life easier. 它允许你为你的组件写熟悉的CSS规则;这个规则不影响其他的组件(甚至子组件也不影响).</p>
        <blockquote>
          <p>这个意味着你的css是有作用域的.</p>
        </blockquote>
        <p>让我们看看我们如何用styled-jsx.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>添加样式</h2>
        { this.getTemplate() }
        <Footer url="/style/setup" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Index)