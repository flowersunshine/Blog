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
            ancillaryInfoAndComment: null
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
                content: res.data
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
                {/* <h1>{title}</h1> */}
                <div>
                    <span>{this.state.ancillaryInfoAndComment.modifyTime}</span>
                    <span>阅读:{this.state.ancillaryInfoAndComment.readednum}</span>
                    <span>评论:{this.state.ancillaryInfoAndComment.commentnum}</span>
                    <span>喜欢:{this.state.ancillaryInfoAndComment.likednum}</span>
                </div>
                <article dangerouslySetInnerHTML={{ __html: this.state.content }}></article>
                <div>
                    <button onClick={this.like}><Icon type="heart" theme="outlined" />我喜欢</button>
                </div>
                <Comment id={this.props.match.params.id}></Comment>
            </div>
        );
    }
}