import React from 'react';
import './comment.css';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCommentAction } from '../../actions/actions';

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comment: ''
        };
        this.commentInput = this.commentInput.bind(this);
    }

    commentInput(e){
        this.setState({
            comment: e.target.value
        });
    }

    checkComment(){
        return this.state.comment.trim();
    }

    render(){
        const {comments, id, dispatch} = this.props;
        if(!comments) return (
            <div className="add-comment">
                    <textarea placeholder="您可以发表出您对文章的想法" onChange={this.commentInput} className="add-comment-input"></textarea>
                    <button onClick={() => {dispatch(addCommentAction(id))}}>添加评论</button>
                </div>
        );
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
                    <button onClick={() => {dispatch(addCommentAction(this.state.comment,id))}}>添加评论</button>
                </div>
            </div>
        )
    }
}
Comment.propTypes = {
    id: propTypes.string.isRequired
}
function mapStatetoProps(state, myProps){
    return {
        id: myProps.id,
        comments: state.comments[myProps.id]
    }
}
export default connect(mapStatetoProps)(Comment);