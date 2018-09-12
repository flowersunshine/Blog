import React from 'react'
import { Icon } from 'antd';
import "./commentFooter.css";

export function CommentFooter({comments = 0}){
    return (
        <span className="comment-footer" title="评论数量">
            <Icon type="edit" />
            <i>{comments}</i>
        </span>
    );
}