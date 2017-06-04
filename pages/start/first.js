import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class First extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <p>现在让我们创建我们的第一个页面.</p>
        <p>创建一个名叫
          <code>pages/index.js</code> 的文件,并添加下面的内容:
        </p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-keyword">const</span> Index = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Hello Next.js<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
)

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> Index`}}>
          </code>
        </pre>
        <p>
          现在如果你再次访问 
          <a href="http://localhost:3000/" target="_blank">
            http://localhost:3000
          </a> 
          你将会看到一个带有"Hello Next.js"字样的页面
        </p>
        <p>
          在这儿，我们从<code>pages/index.js</code>
          模块暴露了一个简单的React组件. 同样的, 你可以写你自己的React组件并暴露它.
        </p>
        <blockquote>
          <p>
            确保你的React组件用
            <strong>default</strong>
            关键字暴露.
          </p>
        </blockquote>
        <p>
          现在让我们尝试在你的Index页面显示一个语法错误。这儿是一个例子：<br />
          (我们仅仅移除了这个<strong>&lt;/p&gt;</strong> HTML标签)
        </p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML = {{
            __html : `<span class="hljs-keyword">const</span> Index = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Hello Next.js
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
)

export default Index
</span>`
          }}>
          </code>
          
        </pre>
        <p>这个app在<a href="http://localhost:3000/" target="_blank">http://localhost:3000</a>加载后将发生什么?</p>
        {
          Question({
            "answers" : [{
              id : "01",
              desc : "Nothing happened"
            },{
              id : "02",
              desc : "There's an error with page not found"
            },{
              id : "03",
              desc : "There's an error showing the syntax error"
            },{
              id : "04",
              desc : "There's an error with 500 - Internal Error"
            }]
          })
        }
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h4 style={{ "marginBottom" : "40px" }}>创建我们的第一个页面</h4>
        { this.getTemplate() }
        <Footer url="/start/error" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(First)