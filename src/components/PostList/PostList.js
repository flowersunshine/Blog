import React from 'react';
import { Post } from '../Post/Post';
import { getPostList, getAncillaryInfoAndComment } from '../../axios/axios'
import './PostList.css'
export default class PostList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postList: [],
            ancillaryInfoAndComment: []
        }
    }

    componentWillMount() {
        const self = this
        getPostList().then(res => {
          res.data.postlist.forEach(element => {
              getAncillaryInfoAndComment(element.id).then(res => {
                  this.setState({
                    ancillaryInfoAndComment: this.state.ancillaryInfoAndComment.concat([{[element.id]: res.data}])
                  })
              })
          });
          self.setState({
            postList: res.data.postlist
          })
        })
    }

    render(){
        return (
        <ul className="list-wrapper">
            {this.state.postList.map(post => {
                return (
                    <Post {...post} key={post.id} {...this.state.ancillaryInfoAndComment[post.id]}></Post>
                );
            })}
        </ul>
        );
    }
}