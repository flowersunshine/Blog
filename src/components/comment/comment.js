import React from 'react'
import { getComment } from '../../axios/axios'
import './comment.css'

export class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comments: []
        }
    }

    componentWillMount(){
        getComment(this.props.id).then(res => {
            this.setState({
                comments: res.data
            })
        })
    }

    render(){
        return (
            <div>
                {
                    this.state.comments.map((comment, index) => {
                        return (
                        <p key={comment.id}>
                            {comment.content}
                        </p>
                        )
                    })
                }
            </div>
        )
    }
}