import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import QueueAnim from 'rc-queue-anim';

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Start extends React.Component {

  getMainTemplate () {
    
    return (
      <div>
        <h5 id="setup">开始</h5>
        <p>
          Next.js可以运行在Windows平台上，同样也可以运行在Mac和Linux平台上。你仅仅需要在你的系统上安装Node.js就可以开始构建Next.js应用。
        </p>
        <p>
          这之后，你需要有一个文本编辑器来写代码和一个终端来运行相关的命令。
        </p>
        <blockquote>
          <p>
            如果你的平台是Windows,尝试用 PowerShell. <br />
            Next.js需要一些命令行或终端配合工作,因为在本指南中，我们将会用到一些特定的unix命令。<br />
            我们推荐用PowerShell以便使下来的学习变的容易。
          </p>
        </blockquote>
        <p>开始，用下面的命令创建一个简单的工程。</p>
        <pre>
          <code className="lang-sh hljs bash" dangerouslySetInnerHTML = {{
            __html : `mkdir hello-next
<span class="hljs-built_in">cd</span> hello-next
npm init -y
npm install --save react react-dom next
mkdir pages`
          }}>
          </code>
        </pre>
        <p>
          然后在hello-next目录中打开"package.json"并添加下面的脚步。
        </p>
        <pre>
          <code className="lang-json hljs" dangerouslySetInnerHTML = {{
            __html : `{
  <span class="hljs-attr">"scripts"</span>: {
    <span class="hljs-attr">"dev"</span>: <span class="hljs-string">"next"</span>
  }
}`
          }}>
          </code>
        </pre>
        <p>现在一切都准备就续。运行下面的命令启动开发服务器</p>
        <pre>
          <code className="lang-json hljs">
            npm run dev
          </code>
        </pre>
        <p>然后打开你喜欢的浏览器，访问http://localhost:3000 </p>
        <p>在屏幕上，你看到下面那个一个输出？</p>
        {
          Question({
            "answers" : [{
              id : "01",
              desc : "Error No Page Found"
            },{
              id : "02",
              desc : "404 - This page could not be found"
            },{
              id : "03",
              desc : "Hello Next.js"
            },{
              id : "04",
              desc : "Hello World"
            }]
          })
        }
        <Footer url="/start/404" />
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

const mapStateToProps = (state,ownProps) => { //将store中特定的值绑定到子组件上
  return {
    start : state.start
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions : bindActionCreators({
      selected : actionType.selectAnswer,
      submitAnswer : actionType.submitAnswer
    },dispatch)
  };
};

export default withRedux(initStore,mapStateToProps,mapDispatchToProps)(Start)
