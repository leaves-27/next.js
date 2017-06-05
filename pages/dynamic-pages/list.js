import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class List extends React.Component {
  
  getTemplate(){
    let url = '`/<span class="hljs-attr">post</span>?<span class="hljs-attr">title</span>=<span class="hljs-string">${props.title}</span>`'
    return (
      <div>
        <h2 id="adding-a-list-of-posts">添加一个投票列表</h2>
        <p>首先,让我们在主页添加投票标题的列表.<br />添加下面的内容到<code>pages/index.js.</code>文件</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-keyword">import</span> Layout <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/MyLayout.js'</span>
<span class="hljs-keyword">import</span> Link <span class="hljs-keyword">from</span> <span class="hljs-string">'next/link'</span>

<span class="hljs-keyword">const</span> PostLink = <span class="hljs-function">(<span class="hljs-params">props</span>) =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">{${url}</span>}&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>{props.title}<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></span>
)

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; (
  &lt;Layout&gt;
    &lt;h1&gt;My Blog&lt;/h1&gt;
    &lt;ul&gt;
      &lt;PostLink title="Hello Next.js"/&gt;
      &lt;PostLink title="Learn Next.js is awesome"/&gt;
      &lt;PostLink title="Deploy apps with Zeit"/&gt;
    &lt;/ul&gt;
  &lt;/Layout&gt;
)` 
          }}> 
          </code>
        </pre>
        <p>一旦你添加了这个内容,你将看到一个像这样的页面:</p>
        <p><img style={{"max-width":"100%"}} src="https://cloud.githubusercontent.com/assets/50838/24542722/600b9ce8-161a-11e7-9f1d-7ed08ff394fd.png" alt="" /></p>
        <p>接下来,点击第一个链接。你接得到一个404页面。那是正确的。<br />那这个页面的url是什么呢?</p>
        {
          Question({
            "answers" : [{
              id : "01",
              desc : "/?id=Hello%20Next.js"
            },{
              id : "02",
              desc : "/post?title=Hello%20Next.js"
            },{
              id : "03",
              desc : "/post?title=Hello Next.js"
            },{
              id : "04",
              desc : "/post"
            }]
          })
        }
      </div>
    )
  }
  render () {
    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>创建动态页面</h2>
        { this.getTemplate() }
        <Footer url="/dynamic-pages/pass-data" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(List)