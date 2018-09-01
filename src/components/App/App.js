import React, { Component } from 'react'
import logo from '../../logo.svg'
import './App.css'
import { Layout } from 'antd'
import  SiderRecommend from '../sider/Sider'
import  PostList  from '../PostList/PostList'
import { getPostList } from '../../axios/axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Author } from '../author/author';
import Article from '../article/article';

const { Header, Footer, Sider, Content } = Layout;


class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <img src={logo} alt="logo" className="logo"></img>
            <div className="nav-bar">
              <Link to="/">文章列表</Link>
              <Link to="/author">作者简介</Link>
            </div>
          </Header>
          <Layout>
            <Content>
                <Route exact path="/" component={PostList}></Route>
                <Route path="/author" component={Author}></Route>
                <Route path="/article/:id" component={Article}></Route>
            </Content>
            <Sider><SiderRecommend></SiderRecommend></Sider>
          </Layout>
          <Footer><p className="footer">本Blog的最终解释权由flowersunshine所有，如有问题可以邮件<a href="mailto:wang_xiao_tian@126.com">wang_xiao_tian@126.com</a></p></Footer>
        </Layout>
      </Router>
    )
  }
}

export default App;
