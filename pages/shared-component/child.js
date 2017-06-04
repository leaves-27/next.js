import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Child extends React.Component {
  getTemplate(){
    return (
      <div>
        <h2 id="rendering-child-components">渲染子组件</h2>
        <p>如果你移除,Layout就不可以渲染我们放在<code>Layout</code>里面的元素，像下面显示的:</p>
        <pre>
          <code className="lang-js hljs javascript" dangerouslySetInnerHTML={{
              __html : `<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span>&gt;</span>
       <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This is the about page<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span></span>
)`
            }}>
          </code>
        </pre>
        <p>这仅仅是创建布局组件的一种方法。这里还有一些其他创建布局组件的方法:</p>
        <pre>
          <code className="lang-js hljs javascript" dangerouslySetInnerHTML={{
              __html : `<span class="hljs-keyword">import</span> withLayout <span class="hljs-keyword">from</span> <span class="hljs-string">'../lib/layout'</span>

<span class="hljs-keyword">const</span> Page = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This is the about page<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
)

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> withLayout(Page)`
          }}>
            
          </code>
        </pre>
        <pre>
          <code className="lang-js hljs javascript" dangerouslySetInnerHTML={{
              __html : `<span class="hljs-keyword">const</span> Page = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> (
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This is the about page<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
)

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; (<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">page</span>=<span class="hljs-string">{Page}/</span>&gt;</span>)
</span>`
            }}
          >
          </code>
        </pre>
        <pre>
          <code className="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-keyword">const</span> content = (<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This is the about page<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>)

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; (<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">content</span>=<span class="hljs-string">{content}/</span>&gt;</span>)
</span>`
          }}>
          </code>
        </pre>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>共享组件的用法</h2>
        { this.getTemplate() }
        <Footer url="/shared-component/conclusion" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Child)