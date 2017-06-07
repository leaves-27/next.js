import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class BatmanShows extends React.Component {
  
  getTemplate(){
    let props = '`/p/<span class="hljs-variable">${show.id}</span>`} href={`/post?id=<span class="hljs-variable">${show.id}</span>`'
    let span = '`Show data fetched. Count: <span class="hljs-subst">${data.length}</span>`'
    let span02 = '`Show data fetched. Count: <span class="hljs-variable">${data.length}</span>`'
    
    return (
      <div>
        <h2 id="fetching-batman-shows">获取Batman节目</h2>
        <p>在我们的demo app中, 在首页我们有一个博客投票列表。现在我们将显示一个Batman电视表演节目列表.<br />替换掉那些硬编码的显示信息,我们将从远程服务器获取它们.</p>
        <blockquote>
          <p>这儿我们用这个 <a href="http://www.tvmaze.com/api" target="_blank">TVMaze API</a> 来获取那些电视表演节目.<br />它是一个搜索电视表演节目的API.</p>
        </blockquote>
        <p>首先我们需要安装<a href="https://github.com/developit/unfetch" target="_blank">isomorphic-unfetch</a>.它是我们将用来获取数据的库。它是浏览器<a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">fetch</a> API的一个简单实现,但是在客户端和服务器端环境都可以工作.</p>
        <pre>
          <code class="lang-bash hljs">
            npm install --save isomorphic-unfetch
          </code>
        </pre>
        <p>然后用下面的内容替换我们的 <code>pages/index.js</code>文件:</p>
        <pre>
          <code class="lang-bash hljs" dangerouslySetInnerHTML={{
            __html  : `import Layout from <span class="hljs-string">'../components/MyLayout.js'</span>
        import Link from <span class="hljs-string">'next/link'</span>
        import fetch from <span class="hljs-string">'isomorphic-unfetch'</span>

        const Index = (props) =&gt; (
          &lt;Layout&gt;
            &lt;h1&gt;Batman TV Shows&lt;/h1&gt;
            &lt;ul&gt;
              {props.shows.map(({show}) =&gt; (
                &lt;li key={show.id}&gt;
                  &lt;Link as={${props}}&gt;
                    &lt;a&gt;{show.name}&lt;/a&gt;
                  &lt;/Link&gt;
                &lt;/li&gt;
              ))}
            &lt;/ul&gt;
          &lt;/Layout&gt;
        )

        Index.getInitialProps = async <span class="hljs-function"><span class="hljs-title">function</span></span>() {
          const res = await fetch(<span class="hljs-string">'http://api.tvmaze.com/search/shows?q=batman'</span>)
          const data = await res.json()

          console.log(${span02})

          <span class="hljs-built_in">return</span> {
            shows: data
          }
        }

        <span class="hljs-built_in">export</span> default Index`
          }}>
          </code>
        </pre>
        <p>在上面页面中的所有东西除了像下面显示的<code>Index.getInitialProps</code>部分，对你来说都是熟悉的:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html  : `Index.getInitialProps = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
          <span class="hljs-keyword">const</span> res = <span class="hljs-keyword">await</span> fetch(<span class="hljs-string">'http://api.tvmaze.com/search/shows?q=batman'</span>)
          <span class="hljs-keyword">const</span> data = <span class="hljs-keyword">await</span> res.json()

          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">${span}</span>)

          <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">shows</span>: data
          }
        }`
          }}>
          </code>
        </pre>
        <p>它是一个你可以添加到你的app中任何页面的静态异步函数。使用它, 我们可以获取数据，然后把他们通过属性传到我们的页面.</p>
        <p>正如你所看到的,现在我们将获取Batman 电视节目，并把它们作为'shows'属性的值传到我们的页面.</p>
        <p><img style={{"max-width":"100%"}} src="https://cloud.githubusercontent.com/assets/50838/26300128/de007dd6-3efa-11e7-9084-6ba7ff10774b.png" alt="" /></p>
        <hr />
        <p>像你看到的上面的<code>getInitialProps</code>函数,它在控制台输出了获取到的大量数据.<br />现在看一看浏览器端的控制台和服务器端的控制台.<br />然后重载页面.</p>
        <p>重载页面后，你看到上面的信息打印在哪里了?</p>
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
              desc : "在服务器端控制台和浏览器端控制台都有"
            },{
              id : "04",
              desc : "在服务器端控制台和浏览器端控制台都没有"
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
        <Footer url="/fetching-data/only-server" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(BatmanShows)