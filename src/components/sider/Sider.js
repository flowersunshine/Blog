import React from 'react'
import { Icon } from 'antd';

class SiderRecommend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().getDate()
        }
        setTimeout(() => {
            this.setState({
                time: new Date().getDate()
            })
        },1000);
    }

    render(){
        return(
            <div>
                <header>{this.state.time}</header>
                <div className="recommend-item">
                    <a><Icon type="github" />个人Github</a>
                </div>
            </div>
        );
    }
}

export default SiderRecommend