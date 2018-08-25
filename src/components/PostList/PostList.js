import React from 'react';
import { Post } from '../Post/Post';

export function PostList({postList}) {
    return (
        <ul>
            {postList.map(post => {
                return (
                    <Post {...post} key={post.id}></Post>
                );
            })}
        </ul>
    );
}