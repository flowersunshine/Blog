import React from 'react'
import { getComment, addComment } from '../../axios/axios'
import './comment.css'

export class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comments: [],
            comment: ''
        }
        this.commentInput = this.commentInput.bind(this)
        this.addComment = this.addComment.bind(this)
    }

    componentWillMount(){
        getComment(this.props.id).then(res => {
            this.setState({
                comments: res.data
            })
        })
    }

    commentInput(e){
        this.setState({
            comment: e.target.value
        })
    }

    addComment(){
        if(!this.checkComment()) return;
        addComment(this.props.id, this.state.comment).then(res => {
            this.setState({
                comments: this.state.comments.concat([{content: this.state.comment, _id: Symbol().toString()}]),
                comment: ''
            })
        })
    }

    checkComment(){
        return this.state.comment.trim()
    }

    render(){
        return (
            <div>
                {
                    this.state.comments.map((comment, index) => {
                        return (
                        <p key={comment._id} className="comment-item">
                            {comment.content}
                        </p>
                        )
                    })
                }
                <div className="add-comment">
                    <textarea placeholder="您可以发表出您对文章的想法" onChange={this.commentInput} value={this.state.comment} className="add-comment-input"></textarea>
                    <button onClick={this.addComment}>添加评论</button>
                </div>
            </div>
        )
    }
}