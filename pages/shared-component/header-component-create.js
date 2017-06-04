import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class HeaderComponentCreate extends React.Component {
  
  getTemplate(){
    return (
      <div data-reactid="125">
        <h2 id="create-the-header-component">创建Header组件</h2>
        <p>
          让我们为我们的app创建一个Header组件。<br />
          添加下面的代码到文件
          <code>components/Header.js</code>
        </p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-keyword">import</span> Link <span class="hljs-keyword">from</span> <span class="hljs-string">'next/link'</span>

<span class="hljs-keyword">const</span> linkStyle = {
  <span class="hljs-attr">marginRight</span>: <span class="hljs-number">15</span>
}

<span class="hljs-keyword">const</span> Header = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"/"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{linkStyle}</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"/about"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{linkStyle}</span>&gt;</span>About<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
)

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> Header
`
          }}>
          </code>
        </pre>
        <p>在我们的app中，这个组件包含了两个链接到其他有效页面的链接.我们也给这个链接添加了点样式，使其更容易被识别。</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>共享组件</h2>
        { this.getTemplate() }
        <Footer url="/shared-component/header-component-using" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(HeaderComponentCreate)