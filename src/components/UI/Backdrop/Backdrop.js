import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => {
    // props.show ? <div className={classes.Backdrop}></div> : null
    if(props.show){
        return (
            <div className={classes.Backdrop} onClick={props.clicked}></div>
        )
    }

    return null;
   
};

export default backdrop;