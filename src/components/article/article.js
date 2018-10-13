import React from "react";
import './article.css';
import Comment from '../comment/comment';
import { Icon } from "antd";
import { addArticleAction, addLikeAction, getCommentsAction, addReadAction } from '../../actions/actions';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
class Article extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const {id, dispatch} = this.props;
        dispatch(addArticleAction(id));
        dispatch(getCommentsAction(id));
        dispatch(addReadAction(id));
    }

    render() {
        const {title, ancillaryInfoAndComment, content, id, dispatch} = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <div>
                    <span>阅读:{ancillaryInfoAndComment.read || 0}</span>
                    <span>评论:{ancillaryInfoAndComment.comments || 0}</span>
                    <span>喜欢:{ancillaryInfoAndComment.like || 0}</span>
                </div>
                <article dangerouslySetInnerHTML={{ __html: content }} className="article-content"></article>
                <div>
                    <button onClick={() => {dispatch(addLikeAction(id))}}><Icon type="heart" theme="outlined" />我喜欢</button>
                </div>
                <Comment id={id}></Comment>
            </div>
        );
    }
}
Article.propTypes = {
    title: propTypes.string.isRequired,
    ancillaryInfoAndComment: propTypes.object.isRequired,
    content: propTypes.string.isRequired,
    id: propTypes.string.isRequired
}
function mapStatetoProp(state, myProps){
    return {
        id: myProps.matches.id,
        title: state.article[myProps.matches.id].title,
        content: state.article[myProps.matches.id].content,
        ancillaryInfoAndComment: state.ancillaryInfoAndComment[myProps.matches.id]
    }
}
export default connect(mapStatetoProp)(Article);