import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../../store';
import * as actionType from '../../actions';

import Layout from '../../components/layout';
import Footer from '../../components/footer';

class Setup extends React.Component {
  getMainTemplate () {
    return (
      <div className="content">
        <div>
          <h2 style={{ "fontSize" : "20px" }}>开始</h2>
          <p>为了学习下来这节课，你需要有一个简单的Next.js app. 为此, 下载下面这个app例子:</p>
          <pre>
            <code className="lang-bash hljs">
              git <span className="hljs-built_in">clone</span> https://github.com/arunoda/learnnextjs-demo.git<br />
              <span className="hljs-built_in">cd</span> learnnextjs-demo<br />
              git checkout getting-started
            </code>
          </pre>
          <p>用如下命令运行它:</p>
          <pre>
            <code className="lang-bash hljs">
              npm install<br />
              npm run dev
            </code>
          </pre>
          <p>现在你可以通过<a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a>访问它</p>
        </div>
        <Footer 
          url="/navigate/using" />
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

export default withRedux(initStore,null,null)(Setup)