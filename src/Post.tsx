import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{id: string}> {}

const Post: React.SFC<Props> = ({match})=>{
    console.log(match);
    return <div>Rendering post id {match.params.id}
    </div>
}

export default Post;