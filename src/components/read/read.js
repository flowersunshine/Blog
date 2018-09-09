import React from 'react'
import { Icon } from 'antd';
import './read.css'

export const Read = ({read = 0}) => (
    <span className="read">
        <Icon type="book" />
        <i>{read}</i>
    </span>
)