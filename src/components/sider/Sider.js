import React from 'react'
import { Icon } from 'antd';
import './Sider.css'
import { getVisit, addVisit } from '../../axios/axios'
class SiderRecommend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
            visitNum: 0
        }
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000);
    }
    componentWillMount(){
        addVisit().then(res => {

        }).catch(err => {
            console.error(err)
        })
        getVisit().then(res => {
            this.setState({
                visitNum: res.data.num
            })
        })
    }
    render(){
        return(
            <div>
                <div>网站总访问量：{this.state.visitNum}</div>
                <header className="center time">{this.state.time}</header>
                <div className="recommend-item center">
                    <a href="https://github.com/flowersunshine?tab=repositories" target="_blank"><Icon type="github" />个人Github</a>
                </div>
            </div>
        );
    }
}

export default SiderRecommend