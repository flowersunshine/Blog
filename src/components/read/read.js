import React from 'react'
import { Icon } from 'antd';
import './read.css'

export const Read = ({read = 0}) => (
    <span className="read" title="阅读数量">
        <Icon type="book" />
        <i>{read}</i>
    </span>
)