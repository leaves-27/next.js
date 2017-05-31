import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../../store';
import * as actionType from '../../actions';

import Layout from '../../components/layout';
import Footer from '../../components/footer';
import Question from '../../components/question'

class Style extends React.Component {
  getMainTemplate () {
    return (
      <div className="content">
        <div>
          <h2 style={{ "fontSize" : "20px" }}>美化链接</h2>
          <div>
            <p>许多时间,我们可能想要美化一下我们的链接.这个是如何来做的呢？</p>
            <pre>
              <code className="lang-js hljs javascript" dangerouslySetInnerHTML={{
                __html : '&lt;Link href="/about"&gt;&lt;a style={{ fontSize:20}}&gt; About Page &lt;/a&gt; &lt;/Link&gt;'
              }}>
                
              </code>
            </pre>
            <p>一旦你添加了这个,你可以看到这个样式正确的应用.</p>
            <p>这个可以替代上面的那个吗?</p>
            <pre>
              <code className="lang-js hljs javascript" dangerouslySetInnerHTML={{
                  __html : '&lt;Link href="/about" style={{ fontSize: 20 }}&gt; &lt;a&gt;About Page&lt;/a&gt; &lt;/Link&gt;'
                }}>
              </code>
            </pre>
            <p>使用上面的变化后，发生了什么?</p>
            {
              Question({
                "answers" : [{
                  id : "01",
                  desc : "它像期望的那样正确应用了这个样式"
                },{
                  id : "02",
                  desc : "对于链接的美化，它没有做任何事情"
                },{
                  id : "03",
                  desc : "一个完整的页面加载后它应用了这个样式"
                },{
                  id : "04",
                  desc : "它应用了这个样式，但是在控制台显示了一条警告"
                }]
              })
            }
          </div>
        </div>
        <Footer 
          url="/navigate/link" />
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

export default withRedux(initStore,null,null)(Style)