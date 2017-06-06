import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Server extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <h2 id="create-a-custom-server">创建一个常用的服务</h2>
        <p>现在我们来用<a href="https://expressjs.com/" target="_blank">Express</a>为我们的app创建一个常用的服务. 它是非常简单的. </p>
        <p>首先,添加Express到你的app:</p>
        <pre>
          <code class="lang-bash hljs">
            npm install --save express
          </code>
        </pre>
        <p>然后在你的app里面创建一个被叫做 <code>server.js</code> 的文件并添加下面的内容:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html :`<span class="hljs-keyword">const</span> express = <span class="hljs-built_in">require</span>(<span class="hljs-string">'express'</span>)
        <span class="hljs-keyword">const</span> next = <span class="hljs-built_in">require</span>(<span class="hljs-string">'next'</span>)

        <span class="hljs-keyword">const</span> dev = process.env.NODE_ENV !== <span class="hljs-string">'production'</span>
        <span class="hljs-keyword">const</span> app = next({ dev })
        <span class="hljs-keyword">const</span> handle = app.getRequestHandler()

        app.prepare()
        .then(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
          <span class="hljs-keyword">const</span> server = express()

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
        <p>现在更新你的npm dev 脚本为:</p>
        <pre>
          <code class="lang-json hljs" dangerouslySetInnerHTML={{
            __html : `{
          <span class="hljs-attr">"scripts"</span>: {
            <span class="hljs-attr">"dev"</span>: <span class="hljs-string">"node server.js"</span>
          }
        }` 
          }}>
          </code>
        </pre>
        <p>现在再次用<code>npm run dev</code>试着运行你的app.</p>
        <p>你将体验到什么?</p>
        {
          Question({
            "answers" : [{
              id : "01",
              desc : "它将为清晰的URLs添加服务端支持"
            },{
              id : "02",
              desc : "app将工作，但没有服务端清晰的URLs"
            },{
              id : "03",
              desc : "app将抛出一个错误'Express and Next.js cannot be used together'"
            },{
              id : "04",
              desc : "app将抛出一个错误'Next.js custom server only work in production'"
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
        <Footer url="/server-side-support/route" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Server)