import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class RouteMask extends React.Component {
  
  getTemplate(){
    let href = '`/<span class="hljs-attr">p</span>/${<span class="hljs-attr">props.id</span>}`} <span class="hljs-attr">href</span>=<span class="hljs-string">{</span>`/<span class="hljs-attr">post</span>?<span class="hljs-attr">title</span>=<span class="hljs-string">${props.title}</span>`'
    return (
      <div>
        <h2 id="route-masking">路由美化</h2>
        <p>这儿，我们将使用一个被叫做路由美化的Next.js独有功能。 总的来说, 它将在浏览器上显示一个和你在你的app中看到的真实URL不同的URL.</p>
        <p>让我们添加路由美化到我们的博客投票URL中.</p>
        <p>在<code>pages/index.js</code>中输入下面的代码:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-keyword">import</span> Layout <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/MyLayout.js'</span>
<span class="hljs-keyword">import</span> Link <span class="hljs-keyword">from</span> <span class="hljs-string">'next/link'</span>

<span class="hljs-keyword">const</span> PostLink = <span class="hljs-function">(<span class="hljs-params">props</span>) =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">as</span>=<span class="hljs-string">{</span>${href}}&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>{props.title}<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></span>
)

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; (
  &lt;Layout&gt;
    &lt;h1&gt;My Blog&lt;/h1&gt;
    &lt;ul&gt;
      &lt;PostLink id="hello-nextjs" title="Hello Next.js"/&gt;
      &lt;PostLink id="learn-nextjs" title="Learn Next.js is awesome"/&gt;
      &lt;PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/&gt;
    &lt;/ul&gt;
  &lt;/Layout&gt;
)`
          }}>
          </code>
        </pre>
        <p>看看这块代码:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-keyword">const</span> PostLink = <span class="hljs-function">(<span class="hljs-params">props</span>) =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">as</span>=<span class="hljs-string">{</span>${href}}&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>{props.title}<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></span>
)`
          }}>
          </code>
        </pre>
        <p>在这个<code>&lt;Link&gt;</code>元素中,我们应用了另一个被叫做“as”的属性.它是需要在这个浏览器中显示的URL。在你的app中看到的URL被放在“href”属性中.</p>
        <hr />
        <p>现在试着点击第一个博客投票，页面将跳转到这个博客投票页面.</p>
        <p>之后点击返回按钮，然后点击<strong>前进</strong>按钮. 将发生什么?</p>
        {
          Question({
            "answers" : [{
              id : "01",
              desc : "它抛出一个错误"
            },{
              id : "02",
              desc : "它返回到首页并且再次跳转到投票页面"
            },{
              id : "03",
              desc : "它返回到首页，这之后没有发生什么"
            },{
              id : "04",
              desc : "它返回到首页，然后抛出一个错误"
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
        <Footer url="/clean-urls/history-awareness" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(RouteMask)