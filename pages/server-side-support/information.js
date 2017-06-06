import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Information extends React.Component {
  
  getTemplate(){
    let href = '`/p/<span class="hljs-subst">${props.id}</span>`</span>} href={<span class="hljs-string">`/post?title=<span class="hljs-subst">${props.title}</span>`';
    return (
      <div data-reactid="119">
        <h2 id="information-on-url">在URL上的信息</h2>
        <p>我们的 <code>/post</code> 页面 通过查询字符串参数<code>title</code>接受标题。在客户端路由中, 我们可以很容易的通过美化的URL得到一个合适的值.<br />(在Link中通过<strong>as</strong>属性).</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `&lt;Link <span class="hljs-keyword">as</span>={<span class="hljs-string">${href}</span>}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>{props.title}<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>
&lt;<span class="hljs-regexp">/Link&gt;
</span>`
          }}>
          </code>
        </pre>
        <p>但是在服务端路由中, 我们没有标题因为我们仅仅有这个博客的ID. 所以, 在这个例子中, 我们设置这个ID做为服务端的查询字符串参数.</p>
        <p>你可以在下面的路由定义中看到它:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `server.get(<span class="hljs-string">'/p/:id'</span>, (req, res) =&gt; {
  <span class="hljs-keyword">const</span> actualPage = <span class="hljs-string">'/post'</span>
  <span class="hljs-keyword">const</span> queryParams = { <span class="hljs-attr">title</span>: req.params.id } 
  app.render(req, res, actualPage, queryParams)
})`
          }}>
          </code>
        </pre>
        <p>这是一个问题. 但是在真是的世界中, 没有这个问题。因为我们将用一个ID从获取服务器端获取数据在服务端和客户端中使用.</p>
        <p>所以，我们仅仅需要一个ID.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>清晰URLs的服务器端支持</h2>
        { this.getTemplate() }
        <Footer url="/server-side-support/finally" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Information)