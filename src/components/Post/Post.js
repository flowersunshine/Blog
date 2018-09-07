import React from 'react'
import { CommentFooter } from '../comment-footer/commentFooter';
import { Like } from '../like/Like';
import { Read } from '../read/read'
import { Link } from 'react-router-dom';
export function Post({id, infoImg, title, description, comment, like, modifyDate, read}) {
    return (
        <li>
            <a className="info-img"><img src={infoImg}></img></a>
            <div className="content">
                <Link to={'/article/' + id} className="post-title" href={id}>{title}</Link>
                <p className="post-desc">{description}</p>
                <footer className="post-footer">
                    <CommentFooter {...comment}></CommentFooter>
                    <Like {...like}></Like>
                    <Read {...read}></Read>
                    <span>{modifyDate}</span>
                </footer>
            </div>
        </li>
    );
}