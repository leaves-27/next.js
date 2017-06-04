import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../../store';
import * as actionType from '../../actions';

import Layout from '../../components/layout';
import Footer from '../../components/footer';
import Question from '../../components/question'

class Anything extends React.Component {
  getMainTemplate () {
    return (
      <div className="content">
        <div>
          <h2 id="link-with-a-button">Link是简单的，但是却是很强大的</h2>
          <p>这儿我们仅仅看了<code>next/link</code>非常基本的用法.还有一些非常有趣的使用方法，我们将在下来的课程中学习它们.</p>
          <p>同时,可以看一看<a href="https://github.com/zeit/next.js#routing" target="_blank">Next.js 路由文档</a>.你将发现它是非常有用的.</p>
        </div>
        <Footer url="/shared-component/" next={{ text:"下一课" }} />
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

export default withRedux(initStore,null,null)(Anything)