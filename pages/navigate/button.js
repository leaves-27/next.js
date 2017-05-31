import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../../store';
import * as actionType from '../../actions';

import Layout from '../../components/layout';
import Footer from '../../components/footer';
import Question from '../../components/question'

class Button extends React.Component {
  getMainTemplate () {
    return (
      <div className="content">
        <div>
          <h2 id="link-with-a-button">带按钮的Link</h2>
          <p>比方说我们需要用一个按钮来替代我们的锚链接.那么我们需要像下面这个修改我们的代码:</p>
          <pre>
            <code className="lang-js hljs javascript">
              &lt;Link href="/about"&gt;
              &lt;button&gt;
              Go to About Page
              &lt;/button&gt;
              &lt;/Link&gt;
            </code>
          </pre>
          <p>当你点击首页的按钮时发生了什么?</p>
          {
            Question({
              "answers" : [{
                id : "01",
                desc : "没有做任何事情"
              },{
                id : "02",
                desc : "抛出一个异常，'链接内部不允许有按钮'"
              },{
                id : "03",
                desc : "重新加载了这个页面"
              },{
                id : "04",
                desc : "页面跳转到了about页面"
              }]
            })
          }
        </div>
        <Footer 
          url="/navigate/anything" />
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

export default withRedux(initStore,null,null)(Button)