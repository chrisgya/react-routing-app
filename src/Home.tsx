import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import SpecialButton from './SpecialButton';

interface Props extends RouteComponentProps {}

const Home: React.SFC<Props> = ({history})=>{
    return <div>
        <div>Home</div>
        <Link to="/about">go to about</Link>
        <button onClick={()=>history.push('/about')}>click me to go to about</button>
        <SpecialButton />
    </div>
}

export default Home;