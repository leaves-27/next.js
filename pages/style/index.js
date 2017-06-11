import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Layout from '../../components/layout'
import Question from '../../components/question'
import Footer from '../../components/footer';

import { initStore } from '../../store'
import * as actionType from '../../actions';

class Index extends React.Component {
  
  getTemplate(){
    return (
      <div>
        <p>Until now, styling components were largely an afterthought. But your app deserves some style.</p>
        <p>For a React app, there are many different techniques that we can use to style it, and those can be categorized into two broad methods:</p>
        <ol>
        <li>Traditional CSS-file-based styling (including SASS, PostCSS etc)</li>
        <li><a href="https://github.com/MicheleBertoli/css-in-js" target="_blank">CSS in Js</a> styling</li>
        </ol>
        <p>Consequently, there are a bunch of practical issues to consider with traditional CSS-file-based styling (especially with SSR), so we suggest avoiding this method when styling for Next.js.</p>
        <p>Instead we recommend CSS in JS, which you can use to style individual components rather than importing CSS files.</p>
        <p>Next.js comes preloaded with a CSS in JS framework called <a href="https://github.com/zeit/styled-jsx" target="_blank">styled-jsx</a>, specifically designed to make your life easier. It allows you to write familiar CSS rules for your components; rules will have no impact on anything other than the components (not even child components).</p>
        <blockquote>
        <p>That means, your CSS rules are scoped.</p>
        </blockquote>
        <p>Let's see how we can use styled-jsx.</p>
      </div>
    )
  }
  render () {

    return (
      <Layout>
        <h2 style={{ "marginBottom" : "40px" }}>清晰URLs的服务器端支持</h2>
        { this.getTemplate() }
        <Footer url="/server-side-support/server" />
      </Layout>
    )
  }
}

export default withRedux(initStore,null,null)(Index)