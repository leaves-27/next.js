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
    let stringTpl = `
        <span class="hljs-attr">This</span> <span class="hljs-attr">is</span> <span class="hljs-attr">our</span> <span class="hljs-attr">blog</span> <span class="hljs-attr">post.</span>
        <span class="hljs-attr">Yes.</span> <span class="hljs-attr">We</span> <span class="hljs-attr">can</span> <span class="hljs-attr">have</span> <span class="hljs-attr">a</span> [<span class="hljs-attr">link</span>](/<span class="hljs-attr">link</span>)<span class="hljs-attr">.</span>
        <span class="hljs-attr">And</span> <span class="hljs-attr">we</span> <span class="hljs-attr">can</span> <span class="hljs-attr">have</span> <span class="hljs-attr">a</span> <span class="hljs-attr">title</span> <span class="hljs-attr">as</span> <span class="hljs-attr">well.</span>

        ### <span class="hljs-attr">This</span> <span class="hljs-attr">is</span> <span class="hljs-attr">a</span> <span class="hljs-attr">title</span>

        <span class="hljs-attr">And</span> <span class="hljs-attr">here</span>'<span class="hljs-attr">s</span> <span class="hljs-attr">the</span> <span class="hljs-attr">content.</span>
             `
    let string = '`'+`${stringTpl}`+'`'

    let string02Tpl = `
       .markdown {
         font-family: 'Arial';
       }

       .markdown a {
         text-decoration: none;
         color: blue;
       }

       .markdown a:hover {
         opacity: 0.6;
       }

       .markdown h3 {
         margin: 0;
         padding: 0;
         text-transform: uppercase;
       }
    `
    let string02 = '`'+`${string02Tpl}`+'`'

    return (
      <div data-reactid="128">
        <h2 id="global-styles">全局样式</h2>
        <p>有时, 我们需要在子元素的内部改变样式.特别的是markdown和React一起使用时.你可以看看我们的投票页面. (<code>pages/post.js</code>)</p>
        <p>这是全局样式使用的地方. 现在试着用styled-jsx添加一些全局的样式规则.在 <code>pages/post.js</code>中添加下面的内容.</p>
        <blockquote>
          <p>应用下面的内容前，用<code>npm install --save react-markdown</code>命令安装<a href="https://github.com/rexxars/react-markdown" target="_blank">react-markdown</a>组件到你的app</p>
        </blockquote>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html  : `<span class="hljs-keyword">import</span> Layout <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/MyLayout.js'</span>
        <span class="hljs-keyword">import</span> Markdown <span class="hljs-keyword">from</span> <span class="hljs-string">'react-markdown'</span>

        <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (props) =&gt; (
          <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span>&gt;</span>
           <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>{props.url.query.title}<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
           <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"markdown"</span>&gt;</span>
             <span class="hljs-tag">&lt;<span class="hljs-name">Markdown</span> <span class="hljs-attr">source</span>=<span class="hljs-string">{</span>${string}}/&gt;</span>
           <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
           <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">jsx</span> <span class="hljs-attr">global</span>&gt;</span><span class="undefined">{${string02}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>
        )
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
              desc : "样式应用到markdown内容上了"
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
        <Footer url="/style/global-style-work" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Index)