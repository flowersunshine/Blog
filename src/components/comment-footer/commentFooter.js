import React from 'react'
import { Icon } from 'antd';
import "./commentFooter.css";

export function CommentFooter({comments = 0}){
    return (
        <span className="comment-footer">
            <Icon type="edit" />
            <i>{comments}</i>
        </span>
    );
}