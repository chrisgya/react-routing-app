import React from 'react';
import { withRouter } from 'react-router-dom';


const SpecialButton = withRouter(({history})=>{
    return  <button onClick={()=>{history.push('/posts/special')}}>special button</button>

});

export default SpecialButton;