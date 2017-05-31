import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../../store';
import * as actionType from '../../actions';

import Layout from '../../components/layout';
import Footer from '../../components/footer';
import Question from '../../components/question'

class History extends React.Component {
  getMainTemplate () {
    return (
      <div className="content">
        <div>
          <h2 style={{ "fontSize" : "20px" }}>客户端历史记录支持</h2>
          <div>
            <p>当你点击返回按钮时,页面通过客户端路由跳转到了首页;这个过程是由<code>next/link</code>代替<a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API" target="_blank"><code>location.history</code></a>为你完成.</p>
            <p>你甚至不需要写一行客户端路由代码.</p>
            <p>简单的链接到这个页面，它就可以工作了!</p>
          </div>
        </div>
        <Footer 
          url="/navigate/style" />
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

export default withRedux(initStore,null,null)(History)