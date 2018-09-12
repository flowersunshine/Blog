import React from "react";
import { getArticle, addRead, getAncillaryInfoAndComment, addLike } from "../../axios/axios";
import './article.css'
import { Comment } from '../comment/comment'
import { Icon } from "antd";

export default class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: null,
            ancillaryInfoAndComment: {},
            title: ''
        }
        this.like = this.like.bind(this)
    }

    componentWillMount() {
        const self = this;
        getAncillaryInfoAndComment(this.props.match.params.id).then(res => {
            this.setState({
                ancillaryInfoAndComment: res.data
            })
        })
        getArticle(this.props.match.params.id).then(res => {
            self.setState({
                content: res.data.html,
                title: res.data.title
            });
        });
        addRead(this.props.match.params.id).then(res => {

        }).catch(err => {
            console.error(err)
        })
    }

    like(){
        addLike(this.props.match.params.id).then(res => {

        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div>
                    {/* <span>{this.state.ancillaryInfoAndComment.modifyTime}</span> */}
                    <span>阅读:{this.state.ancillaryInfoAndComment.read || 0}</span>
                    <span>评论:{this.state.ancillaryInfoAndComment.comments || 0}</span>
                    <span>喜欢:{this.state.ancillaryInfoAndComment.like || 0}</span>
                </div>
                <article dangerouslySetInnerHTML={{ __html: this.state.content }} className="article-content"></article>
                <div>
                    <button onClick={this.like}><Icon type="heart" theme="outlined" />我喜欢</button>
                </div>
                <Comment id={this.props.match.params.id}></Comment>
            </div>
        );
    }
}