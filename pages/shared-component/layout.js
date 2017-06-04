import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class HeaderComponentUsing extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <h2 id="the-layout-component">布局组件</h2>
        <p>在我们的app中，在各页面间我们将用一个公用的样式。为了达到这个目的, 我们创建一个共同的布局组件，然后在各个页面中使用它。这里是一个例子:</p>
        <p>添加这里的内容到<code>components/MyLayout.js</code>:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-keyword">import</span> Header <span class="hljs-keyword">from</span> <span class="hljs-string">'./Header'</span>

<span class="hljs-keyword">const</span> layoutStyle = {
  <span class="hljs-attr">margin</span>: <span class="hljs-number">20</span>,
  <span class="hljs-attr">padding</span>: <span class="hljs-number">20</span>,
  <span class="hljs-attr">border</span>: <span class="hljs-string">'1px solid #DDD'</span>
}

<span class="hljs-keyword">const</span> Layout = <span class="hljs-function">(<span class="hljs-params">props</span>) =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{layoutStyle}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Header</span> /&gt;</span>
    { props.children }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
)

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> Layout`
          }}>
          </code>
        </pre>
        <p>一旦我们完成了这个,我们可以像这样在我们的页面中用它:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-comment">// pages/index.js</span>

<span class="hljs-keyword">import</span> Layout <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/MyLayout.js'</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span>&gt;</span>
       <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Hello Next.js<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span></span>
)` 
          }}>
          </code>
        </pre>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-comment">// pages/about.js</span>

<span class="hljs-keyword">import</span> Layout <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/MyLayout.js'</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span>&gt;</span>
       <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This is the about page<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span></span>
)`
          }}>
          </code>
        </pre>
        <p>记住, 你可以用 <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> 访问app，看它的样子。</p>
        <p>现在让我们尝试从布局组件中移除 <code dangerouslySetInnerHTML={{
          __html : `{props.children}`
        }}></code>看看在app中，将发生什么.</p>
        <p>在我们的app中，发生了什么?</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>共享组件</h2>
        { this.getTemplate() }
        <Footer url="/shared-component/child" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(HeaderComponentUsing)