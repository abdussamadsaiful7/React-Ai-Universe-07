import React from 'react';

const Button = ({children}) => {
    // console.log(props)
    // const {children} = props;
    return (
        <div className='mt-4'>
        <button className="btn btn-active btn-success">{children}</button>
        </div>
    );
};

export default Button;