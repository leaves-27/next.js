import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import QueueAnim from 'rc-queue-anim';

import { initStore } from '../store'
import * as actionType from '../actions';

import Layout from '../components/layout'
import Footer from '../components/footer';

class Index extends React.Component {
  getMainTemplate () {
    return (
      <div>
        <p>目前，创建单页JavaScript应用还是相当有挑战的这已经不是什么秘密。幸运的是，有一些简化了这些事情，可以帮助你快速构建你的app的现成项目。</p>
        <p>例如<a href="https://github.com/facebookincubator/create-react-app" target="_blank">Create React App</a>就是一个非常好的例子。</p>
        <p>但即使如此，你要构建适合你自己的JavaScript应用，还是有很高的成本。因为你还需要学习客户端路由、页面布局等等。如果你想要完成服务端渲染来使你的页面加载的更快，事情可能变的会更加困难。</p>
        <p>
          <strong>鉴于此，我们需要事情变的简单但可定制。</strong>
        </p>
        <p>想想webapps是如何被用PHP创建的。你创建一些文件，写上PHP代码，然后简单的部署它。你不用担心太多的路由配置，app渲染默认就是在服务器端进行的。</p>
        <p><img width="112" alt="Next.js Logo" src="https://cloud.githubusercontent.com/assets/50838/24116055/7076ba9c-0dcb-11e7-93d0-ba8f9ac8f6e4.png" /></p>
        <p>这些，我们用Next.js做起来更简单。与PHP不同的是，我们是用JavaScript和React来构建这个app。这儿是一些Next.js带给我们很酷的功能:</p>
        <div>
          <ul>
            <li>默认通过服务器端渲染</li>
            <li>为了更快的进行页面加载，代码自动分割</li>
            <li>基于页面简单的客户端路由配置</li>
            <li>基于webpack支持热替换的开发环境<a href="https://webpack.js.org/concepts/hot-module-replacement/" target="_blank">热替换</a> (HMR)</li>
            <li>可以用Express或者其他的一些Node.js HTTP服务实现</li>
            <li>用你自己的Babel和Webpack配置进行定制</li>
          </ul>
        </div>
        <p>听起来很美好，对不对？</p>
        <p>让我们来尝试一下</p>
        <Footer 
          url="/start/setup" 
          prev={{
            "isShow" : false
          }}

          next={{
            "isShow" : true,
            "text":"现在开始"
          }} 
        /> 
      </div>
    )
  } 
  
  render () {

    return (
      
        <Layout>
          <QueueAnim 
              type={['right', 'left']}
              ease={['easeOutQuart', 'easeInOutQuart']} >
            <h4 style={{ "marginBottom" : "40px" }}>起步入门</h4>
            { this.getMainTemplate() }
          </QueueAnim>
        </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Index)
