import React from 'react';
import './comment.css';
import propTypes from 'prop-types';

export class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comment: ''
        }
        this.commentInput = this.commentInput.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    commentInput(e){
        this.setState({
            comment: e.target.value
        })
    }

    addComment(){
        if(!this.checkComment()) return;

    }

    checkComment(){
        return this.state.comment.trim()
    }

    render(){
        const {comments} = this.props;
        return (
            <div>
                {
                    comments.map((comment, index) => {
                        return (
                        <p key={comment._id} className="comment-item">
                            {comment.content}
                        </p>
                        )
                    })
                }
                <div className="add-comment">
                    <textarea placeholder="您可以发表出您对文章的想法" onChange={this.commentInput} className="add-comment-input"></textarea>
                    <button onClick={this.addComment}>添加评论</button>
                </div>
            </div>
        )
    }
}
Comment.propTypes = {
    comments: propTypes.array.isRequired,
}