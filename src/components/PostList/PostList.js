import React from 'react';
import { Post } from '../Post/Post';
import './PostList.css';
import propTypes from 'prop-types';
import { getPostListAction } from '../../actions/actions'
import { connect } from 'react-redux';

class PostList extends React.Component {

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getPostListAction());
    }

    render(){
        const { postList, ancillaryInfoAndComment } = this.props;
        return (
            <ul className="list-wrapper">
                {postList.map(post => {
                    return (
                        <Post {...post} key={post.id} {...ancillaryInfoAndComment[post.id]}></Post>
                    );
                })}
            </ul>
        );
    }
}
PostList.propTypes = {
    postList: propTypes.array.isRequired,
    ancillaryInfoAndComment: propTypes.object.isRequired
}
function mapStatetoProps(state){
    return {
        postList: state.postlist,
        ancillaryInfoAndComment: state.ancillaryInfoAndComment
    }
}

export default connect(mapStatetoProps)(PostList);