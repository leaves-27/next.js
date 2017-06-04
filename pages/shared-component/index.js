import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class ShareComponent extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <p>我们认识了Next.js关于页面的一切。我们可以通过暴露一个React组件的方式创建一个页面，并把该页面放在<code>pages</code>目录中。这样它就拥有了一个基于这个文件名的固定URL</p>
        <p>由于暴露的页面是一个JavaScript模块, 所以我们一样可以导入其他的JavaScript组件到其中.</p>
        <blockquote>
          <p>这是你想要的一个和其他JavaScript框架一样的特征</p>
        </blockquote>
        <p>在这一节课,我们将先创建一个公用Header组件，然后在多个页面中应用它们。但最终，我们要实现一个布局组件，来看看它是怎样帮助我们为多个页面定义界面的.</p>
        <p>让我们开始吧.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>共享组件</h2>
        { this.getTemplate() }
        <Footer url="/shared-component/setup" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(ShareComponent)