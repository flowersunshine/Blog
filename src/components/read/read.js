import React from 'react'
import { Icon } from 'antd';
import './read.css'

const Read = ({num}) => (
    <span>
        <Icon type="book" />
        <i>{num}</i>
    </span>
)
export default Read