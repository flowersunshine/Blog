import React, { Component } from 'react'
import './App.css'
import { Layout } from 'antd'
import  SiderRecommend from '../sider/Sider'
import  PostList  from '../PostList/PostList'
import { getPostList, addVisit } from '../../axios/axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Author } from '../author/author';
import Article from '../article/article';

const { Header, Footer, Sider, Content } = Layout;


class App extends Component {
  constructor(props){
    super(props);
  }
  
  componentWillMount(){
    addVisit().then(res => {

    }).catch(err => {
        console.error(err)
    })
  }

  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <div className="nav-bar">
              <Link to="/">文章列表</Link>
              <Link to="/author">作者简介</Link>
            </div>
          </Header>
          <Layout>
            <Content style={{padding: '0.3rem'}}>
                <Route exact path="/" component={PostList}></Route>
                <Route path="/author" component={Author}></Route>
                <Route path="/article/:id" component={Article}></Route>
            </Content>
            <Sider theme="light"><SiderRecommend></SiderRecommend></Sider>
          </Layout>
          <Footer><p className="footer">本Blog的最终解释权由flowersunshine所有，如有问题可以邮件<a href="mailto:wang_xiao_tian@126.com">wang_xiao_tian@126.com</a></p></Footer>
        </Layout>
      </Router>
    )
  }
}

export default App;
