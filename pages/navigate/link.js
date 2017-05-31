import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../../store';
import * as actionType from '../../actions';

import Layout from '../../components/layout';
import Footer from '../../components/footer';
import Question from '../../components/question'

class Link extends React.Component {
  getMainTemplate () {
    return (
      <div className="content">
        <div>
          <h2 style={{ "fontSize" : "20px" }}>Link 仅仅是一个更高级的命令组件</h2>
          <p>事实上,在<code>next/link</code>上的样式属性是没有任何效果的.因为<code>next/link</code>仅仅是一个仅接受"href"及其类似属性的<a href="https://facebook.github.io/react/docs/higher-order-components.html" target="_blank">更高级别的命令组件</a>.如果你需要美化它,你需要在它的子组件上完成.</p>
          <p>在这个例子中, 它是我们的锚链接a标签.</p>
        </div>
        <Footer 
          url="/navigate/button" />
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

export default withRedux(initStore,null,null)(Link)