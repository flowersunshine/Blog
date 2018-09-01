import React from 'react';
import { Post } from '../Post/Post';
import {getPostList} from '../../axios/axios'

export default class PostList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postList: []
        }
    }

    componentDidMount() {
        const self = this
        getPostList().then(res => {
          self.setState({
            postList: res.data.postlist
          })
        })
    }

    render(){
        return (
        <ul>
            {this.state.postList.map(post => {
                return (
                    <Post {...post} key={post.id}></Post>
                );
            })}
        </ul>
        );
    }
}