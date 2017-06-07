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

    return (
      <div data-reactid="119"><h2 id="implement-the-post-page">Implement the Post Page</h2>
        <p>Now let's try to implement the “/post” page where it shows the detailed information about the TV show.</p>
        <p>First, open the <code>server.js</code> and change the <code>/p/:id</code> route with the following content:</p>
        <pre><code class="lang-js hljs javascript">server.get(<span class="hljs-string">'/p/:id'</span>, (req, res) =&gt; {
            <span class="hljs-keyword">const</span> actualPage = <span class="hljs-string">'/post'</span>
            <span class="hljs-keyword">const</span> queryParams = { <span class="hljs-attr">id</span>: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })
        </code></pre>
        <p>Then restart your app to apply the above code change.</p>
        <blockquote>
        <p>Earlier, we mapped the <code>title</code> query param to the page. Now we need to rename it to <code>id</code>.</p>
        </blockquote>
        <p>Now replace the <code>pages/post.js</code> with the following content:</p>
        <pre><code class="lang-js hljs javascript"><span class="hljs-keyword">import</span> Layout <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/MyLayout.js'</span>
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
          const res = await fetch(`http://api.tvmaze.com/shows/${id}`)
          const show = await res.json()

          console.log(`Fetched show: ${show.name}`)

          return { show }
        }

        export default Post
        </span></code></pre>
        <p>Have a look at the getInitialProps of that page:</p>
        <pre><code class="lang-js hljs javascript">Post.getInitialProps = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">context</span>) </span>{
          <span class="hljs-keyword">const</span> { id } = context.query
          <span class="hljs-keyword">const</span> res = <span class="hljs-keyword">await</span> fetch(<span class="hljs-string">`http://api.tvmaze.com/shows/<span class="hljs-subst">${id}</span>`</span>)
          <span class="hljs-keyword">const</span> show = <span class="hljs-keyword">await</span> res.json()

          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Fetched show: <span class="hljs-subst">${show.Title}</span>`</span>)

          <span class="hljs-keyword">return</span> { show }
        }
        </code></pre>
        <p>In that, the first argument of the function in the <strong>context</strong> object. It has a query field that we can use to fetch information.</p>
        <p>In our example, we picked the show ID from query params and fetched its show data from the TVMaze API.</p>
        <hr>
        <p>In this getInitialProps function, we have added a console.log to print the show title. Now we are going to see where it's going to print.</p>
        <p>Open both the server console and the client console.<br>Then visit to the home page <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> and click on the first Batman show title.</p>
        <p>In what places have you seen the above mentioned console.log message?</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>为页面获取数据</h2>
        { this.getTemplate() }
        <Footer url="/fetching-data/post-page" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(PostPage)