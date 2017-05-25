import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../../store';
import * as actionType from '../../actions';

import Layout from '../../components/layout';
import Footer from '../../components/footer';
import Message from '../../components/message';

class Setup extends React.Component {
  getMainTemplate () {
    return (
      <div className="content">
        <Message />
        <Footer 
          url="/navigate/setup" 
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

  render(){
    return (
      <Layout>
        <h4 style={{ "marginBottom" : "40px" }}>起步</h4>
        { this.getMainTemplate() }
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Setup)