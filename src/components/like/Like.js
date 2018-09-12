import React from 'react'
import { Icon } from 'antd';
import './Like.css'

export function Like({like = 0}) {
    return (
        <span className="like" title="点赞数量">
            <Icon type="like-o" />
            <i>{like}</i>
        </span>
    );
}