import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class PostPage extends React.Component {
  
  getTemplate(){
    let url = '`http://api.tvmaze.com/shows/${id}`';
    let url02 = '`http://api.tvmaze.com/shows/<span class="hljs-subst">${id}</span>`'
    let name = '`Fetched show: ${show.name}`'
    let name02 = '`Fetched show: <span class="hljs-subst">${show.Title}</span>`'

    return (
      <div data-reactid="119">
        <h2 id="implement-the-post-page">实现投票页面</h2>
        <p>现在让我们试着实现"/post"页面，它用来显示关于电视表演节目的详情。</p>
        <p>首先，打开<code>server.js</code>文件并用下面的内容改变 <code>/p/:id</code>路由:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html  : `server.get(<span class="hljs-string">'/p/:id'</span>, (req, res) =&gt; {
            <span class="hljs-keyword">const</span> actualPage = <span class="hljs-string">'/post'</span>
            <span class="hljs-keyword">const</span> queryParams = { <span class="hljs-attr">id</span>: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })`
          }}>
          </code>
        </pre>
        <p>然后重启你的app以使上面的代码的改变生效.</p>
        <blockquote>
          <p>早前,我们映射了<code>title</code>字符串查询参数到这个页面.现在我们需要把它重名命为<code>id</code>.</p>
        </blockquote>
        <p>现在用下面的内容替换<code>pages/post.js</code>中的内容:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html  : `<span class="hljs-keyword">import</span> Layout <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/MyLayout.js'</span>
        <span class="hljs-keyword">import</span> fetch <span class="hljs-keyword">from</span> <span class="hljs-string">'isomorphic-unfetch'</span>

        <span class="hljs-keyword">const</span> Post =  <span class="hljs-function">(<span class="hljs-params">props</span>) =&gt;</span> (
            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span>&gt;</span>
               <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>{props.show.name}<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
               <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{props.show.summary.replace(/<span class="hljs-tag">&lt;<span class="hljs-name">[</span>/]?<span class="hljs-attr">p</span>&gt;</span>/g, '')}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
               <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{props.show.image.medium}/</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>
        )

        Post.getInitialProps = async function (context) {
          const { id } = context.query
          const res = await fetch(${url})
          const show = await res.json()

          console.log(${name})

          return { show }
        }

        export default Post
        </span>`
          }}>
          </code>
        </pre>
        <p>看看页面中的getInitialProps:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html  : `Post.getInitialProps = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">context</span>) </span>{
          <span class="hljs-keyword">const</span> { id } = context.query
          <span class="hljs-keyword">const</span> res = <span class="hljs-keyword">await</span> fetch(<span class="hljs-string">${url02}</span>)
          <span class="hljs-keyword">const</span> show = <span class="hljs-keyword">await</span> res.json()

          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">${name02}</span>)

          <span class="hljs-keyword">return</span> { show }
        }`
          }}>
          </code>
        </pre>
        <p>在<strong>上下文</strong>对象函数的第一个参数，它有一个我们可以用来获取信息的查询字段.</p>
        <p>在我们的例子中，我们从这个查询字符串参数中拿到id，用它从电视节目API获取显示数据.</p>
        <hr />
        <p>在getInitialProps函数中,我们添加了一个console.log方法用来打印输出title的值. 现在我们看看它将在哪儿打印输出.</p>
        <p>打开这个服务器端控制台和这个客户端控制台.<br />然后访问首页<a href="http://localhost:3000" target="_blank">http://localhost:3000</a>在第一条显示的Batman标题上点击.</p>
        <p>你在什么地方看到了上面提及的console.log方法输出的信息?</p>
        {
          Question({
            "answers" : [{
              id : "01",
              desc : "在服务器端控制台"
            },{
              id : "02",
              desc : "在浏览器端控制台"
            },{
              id : "03",
              desc : "在两个控制台中都看到了"
            },{
              id : "04",
              desc : "在两个控制台中都没有看到"
            }]
          })
        }
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>为页面获取数据</h2>
        { this.getTemplate() }
        <Footer url="/fetching-data/fetching-data-client" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(PostPage)