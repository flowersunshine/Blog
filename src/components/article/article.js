import React from "react";
import './article.css'
import { Comment } from '../comment/comment'
import { Icon } from "antd";
import propTypes from 'prop-types'

export default function Article({title, ancillaryInfoAndComment, content, like, id}){
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <span>阅读:{ancillaryInfoAndComment.read || 0}</span>
                <span>评论:{ancillaryInfoAndComment.comments || 0}</span>
                <span>喜欢:{ancillaryInfoAndComment.like || 0}</span>
            </div>
            <article dangerouslySetInnerHTML={{ __html: content }} className="article-content"></article>
            <div>
                <button onClick={like}><Icon type="heart" theme="outlined" />我喜欢</button>
            </div>
            <Comment id={id}></Comment>
        </div>
    );
}
Article.propTypes = {
    title: propTypes.string.isRequired,
    ancillaryInfoAndComment: propTypes.object.isRequired,
    content: propTypes.string.isRequired,
    like: propTypes.func.isRequired,
    id: propTypes.string.isRequired
}