import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../../store';
import * as actionType from '../../actions';

import Layout from '../../components/layout';
import Footer from '../../components/footer';

class Navigate extends React.Component {
  getMainTemplate () {
    return (
      <div className="content">
        <div className="markdown">
          <div>
            <p>现在我们知道如何创建一个简单的Next.js app并且运行它。我们的简单app不仅仅有一个单页面,而且我们可以添加很多我们想要的东西。例如，我们可以通过添加下面的内容到<code>pages/about.js</code>文件创建一个"About"页面:</p>
            <pre>
              <code className="lang-js hljs javascript" dangerouslySetInnerHTML = {{
                __html : `<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This is the about page<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
)`
              }}>
              </code>
            </pre>
            <p>
              然后我们可以用 
              <a href="http://localhost:3000/about" target="_blank">
                http://localhost:3000/about
              </a>
              访问这个页面
            </p>
            <p>这之后,我们需要把这些页面串联起来.我们可以用一个HTML的"a"标签来完成. 然而,那样不能演示客户端的路由导航;它是通过服务器端的路由导航到这个页面的,那不是我们想要的.</p>
            <p>为了支持客户端的路由,我们需要用Next.js的Link API,它是通过<code>next/link</code>暴露的.</p>
            <p>让我们一起来看看如何使用它.</p>
          </div>
        </div>
        <Footer 
          url="/navigate/setup" 
          next={{
            "isShow" : true,
            "text":"现在开始"
          }} 
        />
      </div>
    )
  }

  render(){
    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>在页面间跳转</h2>
        { this.getMainTemplate() }
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Navigate)