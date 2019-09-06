import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    const postId  = 5;
    return <div>
        <div>Hello About</div>
        <Link to={`/posts/${postId}`}>go to post 5</Link>
    </div>
}