import React from 'react'
import { CommentFooter } from '../comment-footer/commentFooter';
import { Like } from '../like/Like';
import { Read } from '../read/read'
import { Link } from 'react-router-dom';
import './Post.css';
import propTypes from 'prop-types';

export function Post({id, title, description, comments, like, modifyDate, read}) {
    return (
        <li>
            <div className="content">
                <Link to={'/article/' + id} className="post-title" href={id}>{title}</Link>
                <div className="post-desc">{description}</div>
                <footer className="post-footer">
                    <CommentFooter comments={comments}></CommentFooter>
                    <Like like={like}></Like>
                    <Read read={read}></Read>
                    <span>{modifyDate}</span>
                </footer>
            </div>
        </li>
    );
}
Post.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
}