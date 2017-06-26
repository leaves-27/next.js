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
    let url = '`/<span class="hljs-attr">p</span>/${<span class="hljs-attr">post.id</span>}`} <span class="hljs-attr">href</span>=<span class="hljs-string">{</span>`/<span class="hljs-attr">post</span>?<span class="hljs-attr">title</span>=<span class="hljs-string">${post.title}</span>`';
    let styleTpl = `
              h1, a {
                font-family: "Arial";
              }

              ul {
                padding: 0;
              }

              li {
                list-style: none;
                margin: 5px 0;
              }

              a {
                text-decoration: none;
                color: blue;
              }

              a:hover {
                opacity: 0.6;
              }`
      let style = '${styleTpl}'

    return (
      <div>
        <h2 id="styles-and-nested-components">样式和嵌套的组件</h2>
        <p>现在让我们添加一些简单的变化到我们的主页. 我们像这样隔离我们的链接组件:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html  : `<span class="hljs-keyword">import</span> Layout <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/MyLayout.js'</span>
        <span class="hljs-keyword">import</span> Link <span class="hljs-keyword">from</span> <span class="hljs-string">'next/link'</span>

        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPosts</span> (<span class="hljs-params"></span>) </span>{
          <span class="hljs-keyword">return</span> [
            { <span class="hljs-attr">id</span>: <span class="hljs-string">'hello-nextjs'</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">'Hello Next.js'</span>},
            { <span class="hljs-attr">id</span>: <span class="hljs-string">'learn-nextjs'</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">'Learn Next.js is awesome'</span>},
            { <span class="hljs-attr">id</span>: <span class="hljs-string">'deploy-nextjs'</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">'Deploy apps with ZEIT'</span>},
          ]
        }

        <span class="hljs-keyword">const</span> PostLink = <span class="hljs-function">(<span class="hljs-params">{ post }</span>) =&gt;</span> (
          <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">as</span>=<span class="hljs-string">{</span>${url}}&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>{post.title}<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></span>
        )

        <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; (
          <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>My Blog<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
              {getPosts().map((post) =&gt; (
                <span class="hljs-tag">&lt;<span class="hljs-name">PostLink</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{post.id}</span> <span class="hljs-attr">post</span>=<span class="hljs-string">{post}/</span>&gt;</span>
              ))}
            <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">jsx</span>&gt;</span><span class="undefined">{${style}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>
        )
        </span>`
          }}>
          </code>
        </pre>
        <p>用上面的内容替换 <code>pages/index.js</code>文件中的内容</p>
        <p>将发生什么?</p>
        {
          Question({
            "answers" : [{
              id : "01",
              desc : "没有什么被改变"
            },{
              id : "02",
              desc : "h1的样式存在但是links的样式不在了"
            },{
              id : "03",
              desc : "在页面上有一个错误"
            },{
              id : "04",
              desc : "在控制台有一个错误"
            }]
          })
        }
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>添加样式</h2>
        { this.getTemplate() }
        <Footer url="/style/no-effect" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Index)