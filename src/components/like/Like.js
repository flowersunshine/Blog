import React from 'react'
import { Icon } from 'antd';

export function Like({num}) {
    return (
        <span>
            <Icon type="like-o" />
            <i>{num}</i>
        </span>
    );
}