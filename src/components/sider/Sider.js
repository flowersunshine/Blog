import React from 'react'
import { Icon } from 'antd';
import './Sider.css'

class SiderRecommend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000);
    }

    render(){
        return(
            <div>
                <header className="center time">{this.state.time}</header>
                <div className="recommend-item center">
                    <a href="https://github.com/flowersunshine?tab=repositories" target="_blank"><Icon type="github" />个人Github</a>
                </div>
            </div>
        );
    }
}

export default SiderRecommend