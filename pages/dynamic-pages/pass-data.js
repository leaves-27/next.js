import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class PassData extends React.Component {
  
  getTemplate(){
    let url = '`/<span class="hljs-attr">post</span>?<span class="hljs-attr">title</span>=<span class="hljs-string">${props.title}</span>`'
    return (
      <div>
        <h2 id="passing-data-via-query-strings">通过查询字符串传数据</h2>
        <p>我们将通过查询字符串参数传递数据.在我们的例子中,它是“title”查询参数. 我们用像下面这样的PostLink组件来完成:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-keyword">const</span> PostLink = <span class="hljs-function">(<span class="hljs-params">props</span>) =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">{</span>${url}}&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>{props.title}<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></span>
)`
          }}>
          </code>
        </pre>
        <p>(看看<code>Link</code>组件的<code>href</code>属性.)</p>
        <p>像那样,你可以用查询字符串传递各种各样你喜欢的数据.</p>
        <h2 id="create-the-post-page">创建“post”页面</h2>
        <p>现在我们需要创建这个投票页面来显示博客的投票. 为了完成它,我们需要从查询字符串获取这个标题.让我们看看如何来完成:</p>
        <p>创建一个名叫<code>pages/post.js</code>的文件并添加下面的内容:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-keyword">import</span> Layout <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/MyLayout.js'</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (props) =&gt; (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span>&gt;</span>
       <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>{props.url.query.title}<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
       <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This is the blog post content.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span></span>
)` 
          }}>
          </code>
        </pre>
        <p>现在我们的页面将看起来像这样:</p>
        <p><img style={{"max-width":"100%"}} src="https://cloud.githubusercontent.com/assets/50838/24542721/5fdd9c26-161a-11e7-9b10-296d4cb6912d.png" alt="" /></p>
        <p>这里表明了上面的代码都做了些什么.</p>
        <ul>
          <li>每个页面将得到一个被叫做“URL”的属性，用来放置一些和当前URL相关的详细内容.</li>
          <li>在这个例子中,我们用了“query”对象,其拥有查询字符串参数.</li>
          <li>所以, 我们通过<code>props.url.query.title</code>得到了这个标题.</li>
        </ul>
        <hr />
        <p>让我们对我们的app做一个简单的修改. 用下面的内容替换“pages/post.js”中的内容:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-keyword">import</span> Layout <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/MyLayout.js'</span>

<span class="hljs-keyword">const</span> Content = <span class="hljs-function">(<span class="hljs-params">props</span>) =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>{props.url.query.title}<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This is the blog post content.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
)

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span>&gt;</span>
       <span class="hljs-tag">&lt;<span class="hljs-name">Content</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span></span>
)` }}>
          </code>
        </pre>
        <p>现在打开<a href="http://localhost:3000/post?title=Hello%20Next.js" target="_blank">http://localhost:3000/post?title=Hello%20Next.js</a>访问，发生了什么？</p>
        {
          Question({
            "answers" : [{
              id : "01",
              desc : "它将像期望的那样工作"
            },{
              id : "02",
              desc : "它将什么都不会渲染"
            },{
              id : "03",
              desc : "它将仅仅渲染这个头部"
            },{
              id : "04",
              desc : "它抛出一个错误"
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
        <Footer url="/dynamic-pages/url-prop" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(PassData)