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
      <div data-reactid="128"><h2 id="no-effect-for-nested-component">No Effect for Nested Component</h2>
        <p>This is what you've seen:</p>
        <p><img src="https://cloud.githubusercontent.com/assets/50838/25552972/6becac5c-2c5c-11e7-9fce-61cdc207a10d.png" alt=""></p>
        <p>As you have witnessed, CSS rules have no effect on elements inside of a child component.</p>
        <p>This feature of styled-jsx helps you to manage styles for bigger apps.</p>
        <p>In that case, you need to style the child component directly. And in our particular case, we need to do this for our Link component:</p>
        <pre><code class="lang-js hljs javascript"><span class="hljs-keyword">const</span> PostLink = <span class="hljs-function">(<span class="hljs-params">{ post }</span>) =&gt;</span> (
          <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">as</span>=<span class="hljs-string">{</span>`/<span class="hljs-attr">p</span>/${<span class="hljs-attr">post.id</span>}`} <span class="hljs-attr">href</span>=<span class="hljs-string">{</span>`/<span class="hljs-attr">post</span>?<span class="hljs-attr">title</span>=<span class="hljs-string">${post.title}</span>`}&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>{post.title}<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">jsx</span>&gt;</span><span class="undefined">{`
              li {
                list-style: none;
                margin: 5px 0;
              }

              a {
                text-decoration: none;
                color: blue;
                font-family: "Arial";
              }

              a:hover {
                opacity: 0.6;
              }
            `}</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></span>
        )
        </code></pre>
        <blockquote>
        <p>Otherwise, you could use <a href="https://github.com/zeit/styled-jsx#global-selectors" target="_blank">global selectors</a>.</p>
        </blockquote>
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