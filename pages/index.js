import Layout from '../components/layout'
import Question from '../components/question'

// import $ from 'jquery'
// import 'bootstrap'

const one = () => (
  <div>
      <p>目前，创建单页JavaScript应用还是相当有挑战的这已经不是什么秘密。幸运的是，有一些简化了这些事情，可以帮助你快速构建你的app的现成项目。</p>
      <p>例如<a hre="https://github.com/facebookincubator/create-react-app" target="_blank">Create React App</a>就是一个非常好的例子。</p>
      <p>但即使如此，你要构建适合你自己的JavaScript应用，还是有很高的成本。因为你还需要学习客户端路由、页面布局等等。如果你想要完成服务端渲染来使你的页面加载的更快，事情可能变的会更加困难。</p>
      <p>
        <strong>鉴于此，我们需要事情变的简单但可定制。</strong>
      </p>
      <p>想想webapps是如何被用PHP创建的。你创建一些文件，写上PHP代码，然后简单的部署它。你不用担心太多的路由配置，app渲染默认就是在服务器端进行的。</p>
      <p><img width="112" alt="Next.js Logo" src="https://cloud.githubusercontent.com/assets/50838/24116055/7076ba9c-0dcb-11e7-93d0-ba8f9ac8f6e4.png" /></p>
      <p>这些，我们用Next.js做起来更简单。与PHP不同的是，我们是用JavaScript和React来构建这个app。这儿是一些Next.js带给我们很酷的功能:</p>
      <p>
        <ul>
          <li>默认通过服务器端渲染</li>
          <li>为了更快的进行页面加载，代码自动分割</li>
          <li>基于页面简单的客户端路由配置</li>
          <li>基于webpack支持热替换的开发环境<a href="https://webpack.js.org/concepts/hot-module-replacement/" target="_blank">热替换</a> (HMR)</li>
          <li>可以用Express或者其他的一些Node.js HTTP服务实现</li>
          <li>用你自己的Babel和Webpack配置进行定制</li>
        </ul>
      </p>
      <p>听起来很美好，对不对？</p>
      <p>让我们来尝试一下</p>
      <button className="btn btn-success">现在开始</button>
    </div>
)

const second = ()=>(
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
        我们推荐用这个PowerShell以便使下来的学习变的容易。
      </p>
    </blockquote>
    <p>开始，用下面的命令创建一个简单的工程。</p>
    <pre>
      <code className="lang-sh hljs bash">
        mkdir hello-next <br />
        <span className="hljs-built_in" style={{ "color":"#c18401"}}>cd </span>   
        hello-next<br />
        npm init -y<br />
        npm install --save react react-dom next<br />
        mkdir pages
      </code>
    </pre>
    <p>
      然后在hello-next目录中打开"package.json"并添加下面的脚步。
    </p>
    <pre>
      <code className="lang-json hljs">
        {
          JSON.stringify({
            "scripts":{
              "dev": "next"
            }
          },null,2)
        }
      </code>
    </pre>
    <p>现在一切都准备就续。运行下面的命令启动开发服务器</p>
    <pre>
      <code class="lang-json hljs">
        npm run dev
      </code>
    </pre>
    <p>然后打开你喜欢的浏览器，访问http://localhost:3000 </p>
    <p>在屏幕上，你看到下面那个一个输出？</p>
    {
      Question({
        "answers" : [{
          desc : "Error No Page Found"
        },{
          desc : "404 - This page could not be found"
        },{
          desc : "Hello Next.js"
        },{
          desc : "Hello World"
        }]
      })
    }
  </div>
)

const Index = () => (
  <Layout>
    <h4 style={{ "margin-bottom" : "40px" }}>起步入门</h4>
    { one() }
  </Layout>
)

export default Index
