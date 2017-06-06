import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Route extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <h2 id="create-our-custom-route">创建我们的常用路由</h2>
        <p>正如你体验到的, 这个app仅像它之前那样工作，因为我们搭建的这个常用服务和我们之前的“next”二进制命令类似.</p>
        <p>现在我们来添加一个常用路由来匹配我们的投票URLs. </p>
        <p>添加新路由后,我们的<code>server.js</code>文件将看起来像这样:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-keyword">const</span> express = <span class="hljs-built_in">require</span>(<span class="hljs-string">'express'</span>)
<span class="hljs-keyword">const</span> next = <span class="hljs-built_in">require</span>(<span class="hljs-string">'next'</span>)

<span class="hljs-keyword">const</span> dev = process.env.NODE_ENV !== <span class="hljs-string">'production'</span>
<span class="hljs-keyword">const</span> app = next({ dev })
<span class="hljs-keyword">const</span> handle = app.getRequestHandler()

app.prepare()
.then(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  <span class="hljs-keyword">const</span> server = express()

  server.get(<span class="hljs-string">'/p/:id'</span>, (req, res) =&gt; {
    <span class="hljs-keyword">const</span> actualPage = <span class="hljs-string">'/post'</span>
    <span class="hljs-keyword">const</span> queryParams = { <span class="hljs-attr">title</span>: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get(<span class="hljs-string">'*'</span>, (req, res) =&gt; {
    <span class="hljs-keyword">return</span> handle(req, res)
  })

  server.listen(<span class="hljs-number">3000</span>, (err) =&gt; {
    <span class="hljs-keyword">if</span> (err) <span class="hljs-keyword">throw</span> err
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'&gt; Ready on http://localhost:3000'</span>)
  })
})
.catch(<span class="hljs-function">(<span class="hljs-params">ex</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.error(ex.stack)
  process.exit(<span class="hljs-number">1</span>)
})`
          }}>
          </code>
        </pre>
        <p>看看下面的代码:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `server.get(<span class="hljs-string">'/p/:id'</span>, (req, res) =&gt; {
    <span class="hljs-keyword">const</span> actualPage = <span class="hljs-string">'/post'</span>
    <span class="hljs-keyword">const</span> queryParams = { <span class="hljs-attr">title</span>: req.params.id } 
    app.render(req, res, actualPage, queryParams)
})` }}>
          </code>
        </pre>
        <p>这儿，我们仅仅映射了一个常用的路由到我们已经存在的"/post"页面. 我们也可以映射查询参数.</p>
        <p>好了, 就这样.</p>
        <p>现在, 重启你的应用并且访问它:</p>
        <p><a href="http://localhost:3000/p/hello-nextjs" target="_blank">http://localhost:3000/p/hello-nextjs</a></p>
        <p>现在你不在看到404页面了，而是看到了真实的页面.</p>
        <p>但是还有一个小小的问题.你看到是什么了吗?</p>
        {
          Question({
            "answers" : [{
              id : "01",
              desc : "没有。没有什么问题"
            },{
              id : "02",
              desc : "客户端渲染的标题和服务器端渲染的标题是不一样的"
            },{
              id : "03",
              desc : "服务端渲染的页面在控制台将有一个错误"
            },{
              id : "04",
              desc : "客户端渲染的页面在控制台将有一个错误"
            }]
          })
        }  
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>清晰URLs的服务器端支持</h2>
        { this.getTemplate() }
        <Footer url="/server-side-support/information" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Route)