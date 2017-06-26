import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class HeaderComponentUsing extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <h2 id="using-the-header-component">Header的用法</h2>
        <p>接下来,让我们导入这个组件，并在我们的页面中使用它.在<code>index.js</code>页面中,它看起来像这样:</p>
        <pre>
        <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-keyword">import</span> Header <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/Header'</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Header</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Hello Next.js<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
)`
        }}>
        </code>
        </pre>
        <p>你也可以对about.js页面做同样的事情.</p>
        <p>完成这一步后,如果你在你的app中访问<a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a>。在各页面间跳转的时候，你将可以看到一个新的头.</p>
        <p><img style={{"max-width":"100%"}} src="https://cloud.githubusercontent.com/assets/50838/24333679/fa856f00-1279-11e7-931d-a5707e51a801.gif" alt="" /></p>
        <hr />
        <p>对我们的应用，让我们尝试做一些简单的修改.</p>
        <ul>
          <li>停止运行这个app.</li>
          <li>重命名<code>components</code>目录为<code>comps</code>。</li>
          <li>用<code>../comps/Header</code>替换<code>../components/Header</code>来导入Header组件.</li>
          <li>再次重启这个app.</li>
        </ul>
        <p>它将工作吗?</p>
        {
          Question({
            "answers" : [{
              id : "01",
              desc : "是的"
            },{
              id : "02",
              desc : "不，它将抛出一个'找不到组件'的错误"
            },{
              id : "03",
              desc : "不，它将抛出'组件需要被放在components目录中'的错误"
            },{
              id : "04",
              desc : "不，它将抛出'comps是一个无效的目录'的错误"
            }]
          })
        }
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>共享组件</h2>
        { this.getTemplate() }
        <Footer url="/shared-component/directory" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(HeaderComponentUsing)