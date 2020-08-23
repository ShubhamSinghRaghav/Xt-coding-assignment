import React, {Fragment} from 'react'
import spin from '../img/6.gif';
const spinner = (props) => {
    return (
        <Fragment>
            <img src={spin} alt='wait...' 
                style={{
                    width:"40px",
                    height:"40px",
                    margin:"auto",
                }}
            />
        </Fragment>
    )
}

export default spinner;