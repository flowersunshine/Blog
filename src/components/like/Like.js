import React from 'react'
import { Icon } from 'antd';
import './Like.css'

export function Like({like = 0}) {
    return (
        <span className="like">
            <Icon type="like-o" />
            <i>{like}</i>
        </span>
    );
}