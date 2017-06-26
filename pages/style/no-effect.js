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
    let url = '`/<span class="hljs-attr">p</span>/${<span class="hljs-attr">post.id</span>}`} <span class="hljs-attr">href</span>=<span class="hljs-string">{</span>`/<span class="hljs-attr">post</span>?<span class="hljs-attr">title</span>=<span class="hljs-string">${post.title}</span>`'
    let stringTpl = `
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
            `
    let string = '`' + `${stringTpl}` +'`'

    return (
      <div>
        <h2 id="no-effect-for-nested-component">添加的样式对嵌套的组件没有效果</h2>
        <p>这是你看到的:</p>
        <p><img style={{"max-width":"100%"}} src="https://cloud.githubusercontent.com/assets/50838/25552972/6becac5c-2c5c-11e7-9fce-61cdc207a10d.png" alt="" /></p>
        <p>正如你目睹的,CSS规则在子元素内的元素上没有效果.</p>
        <p>styled-jsx的这个功能帮助你为更大的应用管理样式.</p>
        <p>在那样的例子中,你需要直接给子组件添加样式才能得到样式. 在我们的特有案例中，我们需要为我们的Link组件来添加样式:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html  : `<span class="hljs-keyword">const</span> PostLink = <span class="hljs-function">(<span class="hljs-params">{ post }</span>) =&gt;</span> (
          <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">as</span>=<span class="hljs-string">{</span>${url}}&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>{post.title}<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">jsx</span>&gt;</span><span class="undefined">{${string}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></span>
        )`
          }}>
          </code>
        </pre>
        <blockquote>
        <p>否则的话，你可以用<a href="https://github.com/zeit/styled-jsx#global-selectors" target="_blank">全局的选择器</a>.</p>
        </blockquote>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>添加样式</h2>
        { this.getTemplate() }
        <Footer url="/style/global-style" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Index)