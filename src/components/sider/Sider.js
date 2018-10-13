import React from 'react';
import { Icon } from 'antd';
import './Sider.css';
import propTypes from 'prop-types';

class SiderRecommend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
        }
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000);
    }
    
    render(){
        const {visitNum} = this.props;
        return(
            <div>
                <div className="center">网站总访问量：{visitNum}</div>
                <header className="center time">{this.state.time}</header>
                <div className="recommend-item center">
                    <a href="https://github.com/flowersunshine?tab=repositories" target="_blank"><Icon type="github" />个人Github</a>
                </div>
            </div>
        );
    }
}
SiderRecommend.propTypes = {
    visitNum: propTypes.number.isRequired
}
export default SiderRecommend