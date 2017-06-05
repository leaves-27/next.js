import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class ShareComponent extends React.Component {
  
  getTemplate(){
    return (
      <div data-reactid="125">
        <h2 id="using-components">组件的用法</h2>
        <p>上文中我们提交了两个共享组件的例子:</p>
        <ol>
          <li>作为公共头的组件.</li>
          <li>作为页面布局的组件.</li>
        </ol>
        <p>你可以在样式化、页面布局和你喜欢的任务中使用组件。一般来说，你可以从npm模块中导入这个组件并使用它们。</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>共享组件的用法</h2>
        { this.getTemplate() }
        <Footer url="/dynamic" next={{ text:"下一课" }} />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(ShareComponent)