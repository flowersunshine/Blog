import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Layout } from 'antd';
import  SiderRecommend from '../sider/Sider'
import { PostList } from '../PostList/PostList';
import { getPostList } from '../../axios/axios';

const { Header, Footer, Sider, Content } = Layout;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      postList: []
    }
  }

  componentDidMount() {
    getPostList().then(res => {
      this.setState({
        postList: res.data
      })
    })
  }
  
  render() {
    return (
      <Layout>
        <Header>
          <img src={logo} alt="logo" className="logo"></img>
          <div className="nav-bar">
            <a>文章列表</a>
            <a>作者简介</a>
          </div>
        </Header>
        <Layout>
          {/* <Content><PostList></PostList></Content> */}
          <Sider><SiderRecommend></SiderRecommend></Sider>
        </Layout>
        <Footer>本Blog的最终解释权由flowersunshine所有，如有问题可以邮件<a href="mailto:wang_xiao_tian@126.com">wang_xiao_tian@126.com</a></Footer>
      </Layout>
    )
  }
}

export default App;
