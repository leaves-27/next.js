import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../../store';
import * as actionType from '../../actions';

import Layout from '../../components/layout';
import Footer from '../../components/footer';
import Question from '../../components/question'

class Link extends React.Component {
  getMainTemplate () {
    return (
      <div className="content">
        <div>
          <h2 style={{ "fontSize" : "20px" }}>链接的用法</h2>
          <div className="markdown">
            <p>现在我们用 
              <code>next/link</code>
              来链接我们的两个页面.
            </p>
            <p>添加下面的代码到<code>pages/index.js</code></p>
            <pre>
              <code className="lang-js hljs javascript" dangerouslySetInnerHTML={{
                __html : `<span class="hljs-comment">// This is the Link API</span>
<span class="hljs-keyword">import</span> Link <span class="hljs-keyword">from</span> <span class="hljs-string">'next/link'</span>

<span class="hljs-keyword">const</span> Index = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"/about"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>About Page<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Hello Next.js<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
)

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> Index`
              }}>
              </code>
            </pre>
            <p>这里我们导入<code>next/link</code>作为<code>Link</code> 然后像这样使用它:</p>
            <pre>
              <code className="lang-js hljs javascript" dangerouslySetInnerHTML={{
                __html : `&lt;Link href=<span class="hljs-string">"/about"</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>About Page<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>
&lt;<span class="hljs-regexp">/Link&gt;
</span>`
              }}>
              </code>
            </pre>
            <p>现在试着访问 <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a></p>
            <p>然后点击"About Page"链接.页面将跳转到"About"页.</p>
            <blockquote>
              <p>这是客户端导航;action是在浏览器中进行的,没有向服务器端发送请求.<br />你可以打开你的浏览器审查元素的网络请求标签进行验证.</p>
            </blockquote>
            <p>好了,现在对你来说我们有一个简单的任务:</p>
            <ul>
              <li>访问 <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a></li>
              <li>然后点击"About Page"</li>
              <li>然后点击你的浏览器的返回按钮</li>
            </ul>
            <p>下面的描述哪个最能恰当的描述你点击浏览器返回按钮后的情况?</p>
            {
              Question({
                "answers" : [{
                  id : "01",
                  desc : "返回按钮不工作"
                },{
                  id : "02",
                  desc : "返回按钮在浏览器的控制台抛出一个错误"
                },{
                  id : "03",
                  desc : "它通过客户端的路由跳转到了首页"
                },{
                  id : "04",
                  desc : "它弹出一个alert，上面写着返回按钮工作需要导入'next/back'"
                }]
              })
            }
          </div>
        </div>
        <Footer 
          url="/navigate/chistory" />
      </div>
    )
  }

  render(){
    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>在页面间的跳转</h2>
        { this.getMainTemplate() }
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Link)