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
    return (
      <div>
        <h2 id="styling-our-home-page">Styling our home page</h2>
        <p>Now let's add some styles into our home page. (<code>pages/index.js</code>)</p>
        <p>Simply replace <code>pages/index.js</code> with the following code:</p>
        <pre><code class="lang-js hljs javascript"><span class="hljs-keyword">import</span> Layout <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/MyLayout.js'</span>
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
                  <span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">as</span>=<span class="hljs-string">{</span>`/<span class="hljs-attr">p</span>/${<span class="hljs-attr">post.id</span>}`} <span class="hljs-attr">href</span>=<span class="hljs-string">{</span>`/<span class="hljs-attr">post</span>?<span class="hljs-attr">title</span>=<span class="hljs-string">${post.title}</span>`}&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>{post.title}<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                  <span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
              ))}
            <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">jsx</span>&gt;</span><span class="undefined">{`
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
            `}</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span></span>
        )
        </code></pre>
        <p>Have a look at the <code>&lt;style jsx&gt;</code> element. This is where we write our CSS rules.</p>
        <p>After you have replaced this code, our blog's home page will look like this:</p>
        <p><img src="https://cloud.githubusercontent.com/assets/50838/25552915/f18f2f12-2c5a-11e7-97aa-4b9d4b9f95a7.png" alt=""></p>
        <p>In the above code, we did  not write styles directly inside of the style tag; rather, it was written inside of a template string.</p>
        <p>Now try to write CSS directly without a template string (<code>{``}</code>). Like this:</p>
        <pre><code class="lang-js hljs javascript">&lt;style jsx&gt;
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
        </span></code></pre>
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

export default withRedux(initStore,null,null)(Setup)