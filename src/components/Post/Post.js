import React from 'react'
import { CommentFooter } from '../comment-footer/commentFooter';
import { Like } from '../like/Like';

export function Post({id, infoImg, title, description, comment, like, modifyDate}) {
    return (
        <li>
            <a className="info-img"><img src={infoImg}></img></a>
            <div className="content">
            
            {/* todo */}

                <a className="post-title" href={id}>{title}</a>
                <p className="post-desc">{description}</p>
                <footer classNamepost-footer>
                    <CommentFooter {...comment}></CommentFooter>
                    <Like {...like}></Like>
                    <span>{modifyDate}</span>
                </footer>
            </div>
        </li>
    );
}