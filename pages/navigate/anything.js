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
          <h2 id="link-with-a-button">带任何东西的Link</h2>
          <p>像一个按钮一样，你可以放置任何你定制的React组件或者一个div在Link内部</p>
          <p>放置在Link内部的组件唯一需要的是接受一个onClick属性</p>
        </div>
        <Footer url="/navigate/conclusion" />
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