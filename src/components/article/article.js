import React from "react";
import './article.css';
import Comment from '../comment/comment';
import { Icon } from "antd";
import { addArticleAction, addLikeAction, getCommentsAction, addReadAction, getBriefAction } from '../../actions/actions';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
class Article extends React.Component {

    componentWillMount() {
        const {id, dispatch} = this.props;
        dispatch(addArticleAction(id));
        dispatch(getCommentsAction(id));
        dispatch(addReadAction(id));
        dispatch(getBriefAction(id));
    }

    render() {
        const {article, ancillaryInfoAndComment, id, dispatch} = this.props;
        return (
            <div>
                <h1>{article && article.title}</h1>
                <div>
                    <span>阅读:{(ancillaryInfoAndComment && ancillaryInfoAndComment.read) || 0}</span>
                    <span>评论:{(ancillaryInfoAndComment && ancillaryInfoAndComment.comments) || 0}</span>
                    <span>喜欢:{(ancillaryInfoAndComment && ancillaryInfoAndComment.like) || 0}</span>
                </div>
                <article dangerouslySetInnerHTML={{ __html: article && article.content }} className="article-content"></article>
                <div>
                    <button onClick={() => {dispatch(addLikeAction(id))}}><Icon type="heart" theme="outlined" />我喜欢</button>
                </div>
                <Comment id={id}></Comment>
            </div>
        );
    }
}
Article.propTypes = {
    id: propTypes.string.isRequired
}
function mapStatetoProp(state, myProps){
    return {
        id: myProps.match.params.id,
        article: state.article[myProps.match.params.id],
        ancillaryInfoAndComment: state.ancillaryInfoAndComment[myProps.match.params.id]
    }
}
export default connect(mapStatetoProp)(Article);