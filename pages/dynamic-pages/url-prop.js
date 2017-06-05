import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class PassData extends React.Component {
  
  getTemplate(){
    
    return (
      <div><h2 id="special-prop-url-">特定的属性"url"</h2>
        <p>正如你看到的那样,那个代码将抛出一个像这样的错误:</p>
        <p><img style={{"max-width":"100%"}}  src="https://cloud.githubusercontent.com/assets/50838/24542720/5fd985a0-161a-11e7-8971-bc677906b1bf.png" alt="" /></p>
        <p>原因是, <code>url</code> 属性仅仅暴露到了页面主组件. 而没有在页面中应用的其他组件暴露. 但是,如果你需要,你可以像这样传递它:</p>
        <pre>
          <code class="lang-js hljs javascript" dangerouslySetInnerHTML={{
            __html : `<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (props) =&gt; (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span>&gt;</span>
       <span class="hljs-tag">&lt;<span class="hljs-name">Content</span> <span class="hljs-attr">url</span>=<span class="hljs-string">{props.url}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>
)
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
        <h2 style={{ "marginBottom" : "40px" }}>创建动态页面</h2>
        { this.getTemplate() }
        <Footer url="/dynamic-pages/finally" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(PassData)