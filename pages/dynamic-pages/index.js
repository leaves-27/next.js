import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Index extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <p>现在我们知道如何创建一个拥有多个页面的基本Next.js app。 要创建一个页面，我们不得不在磁盘上创建一个真实的文件。</p>
        <p>然而,在这个真实的app中,为了展示动态的内容，我们需要创建动态的页面. Next.js有许多方法可以实现它。</p>
        <p>下来我们将通过<strong>查询字符串</strong>的用法来创建动态页面。</p>
        <p>我们将创建一个简单的博客app。它的首页是一个包含所有投票的列表。</p>
        <p><img style={{"max-width":"100%"}} src="https://cloud.githubusercontent.com/assets/50838/24542722/600b9ce8-161a-11e7-9f1d-7ed08ff394fd.png" alt="" /></p>
        <p>当你点击一个投票的标题时,你将在它自己的窗口中看到这个单独的投票。</p>
        <p><img style={{"max-width":"100%"}} src="https://cloud.githubusercontent.com/assets/50838/24542721/5fdd9c26-161a-11e7-9b10-296d4cb6912d.png" alt="" /></p>
        <p>我们开始构建这个app。</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>创建动态页面</h2>
        { this.getTemplate() }
        <Footer url="/dynamic-pages/setup" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Index)