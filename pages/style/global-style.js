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
        <h2 id="global-styles">Global Styles</h2>
        <p>Sometimes, we do need to change styles inside of a child component. This is especially true when using markdown with React. You can see that on our post page. (<code>pages/post.js</code>)</p>
        <p>This is where global styles come in handy. Now try to add some global style rules with styled-jsx. Apply the following content to <code>pages/post.js</code>.</p>
        <blockquote>
          <p>Before you apply the following content, install <a href="https://github.com/rexxars/react-markdown" target="_blank">react-markdown</a> component into your app with: <code>npm install --save react-markdown</code></p>
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
        <p>What will happen?</p>
        </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>清晰URLs的服务器端支持</h2>
        { this.getTemplate() }
        <Footer url="/server-side-support/server" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Index)