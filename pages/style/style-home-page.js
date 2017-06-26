import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Setup extends React.Component {
  
  getTemplate(){
    let url = '`/<span class="hljs-attr">p</span>/${<span class="hljs-attr">post.id</span>}`} <span class="hljs-attr">href</span>=<span class="hljs-string">{</span>`/<span class="hljs-attr">post</span>?<span class="hljs-attr">title</span>=<span class="hljs-string">${post.title}</span>`'
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
              }
            `
      let style = '`' + `${styleTpl}` + '`'

    return (
      <div>
        <h2 id="styling-our-home-page">给我们的主页添加样式</h2>
        <p>现在让我们添加一些样式到我们的主页. (<code>pages/index.js</code>)</p>
        <p>用下面的代码替换<code>pages/index.js</code>:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html   : `<span class="hljs-keyword">import</span> Layout <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/MyLayout.js'</span>
        <span class="hljs-keyword">import</span> Link <span class="hljs-keyword">from</span> <span class="hljs-string">'next/link'</span>

        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPosts</span> (<span class="hljs-params"></span>) </span>{
          <span class="hljs-keyword">return</span> [
            { <span class="hljs-attr">id</span>: <span class="hljs-string">'hello-nextjs'</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">'Hello Next.js'</span>},
            { <span class="hljs-attr">id</span>: <span class="hljs-string">'learn-nextjs'</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">'Learn Next.js is awesome'</span>},
            { <span class="hljs-attr">id</span>: <span class="hljs-string">'deploy-nextjs'</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">'Deploy apps with ZEIT'</span>},
          ]
        }

        <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; (
          <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>My Blog<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
              {getPosts().map((post) =&gt; (
                <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{post.id}</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">as</span>=<span class="hljs-string">{</span>${url}}&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>{post.title}<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                  <span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
              ))}
            <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">jsx</span>&gt;</span><span class="undefined">{${style}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span></span>
        )`
          }}>
          </code>
        </pre>
        <p>看一看<code>&lt;style jsx&gt;</code>元素. 这是我们写我们的CSS规则的地方.</p>
        <p>你替换了这个代码后,我们的博客主页将看起来像这样:</p>
        <p><img style={{"max-width":"100%"}} src="https://cloud.githubusercontent.com/assets/50838/25552915/f18f2f12-2c5a-11e7-97aa-4b9d4b9f95a7.png" alt="" /></p>
        <p>在上面的代码中,我们没有在style标签里直接写样式; 而是,在这个模板字符串内写样式.</p>
        <p>现在尝试在没有模板字符串(<code dangerouslySetInnerHTML={{
          __html : '{``}'
        }}></code>)的情况下，直接写CSS. 像这样:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html  : `&lt;style jsx&gt;
          h1, a {
            font-family: <span class="hljs-string">"Arial"</span>;
          }

          ul {
            <span class="hljs-attr">padding</span>: <span class="hljs-number">0</span>;
          }

          li {
            list-style: none;
            margin: <span class="hljs-number">5</span>px <span class="hljs-number">0</span>;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            <span class="hljs-attr">opacity</span>: <span class="hljs-number">0.6</span>;
          }
        &lt;<span class="hljs-regexp">/style&gt;
        </span>`
          }}>
          </code>
        </pre>
        <p>将发生什么?</p>
        {
          Question({
            "answers" : [{
              id : "01",
              desc : "没有什么被改变"
            },{
              id : "02",
              desc : "新的样式应用了"
            },{
              id : "03",
              desc : "在页面上显示了一个错误：'SyntaxError: Unexpected token'"
            },{
              id : "04",
              desc : "在页面上显示了一个错误：'Invalid styles provided'"
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
        <Footer url="/style/template-string" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Setup)