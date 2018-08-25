import React from 'react'
import { Icon } from 'antd';

export function CommentFooter({num}){
    return (
        <span>
            <Icon type="edit" />
            <i>{num}</i>
        </span>
    );
}