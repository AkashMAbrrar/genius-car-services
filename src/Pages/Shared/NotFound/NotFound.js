import React from 'react';
import NotFound1 from '../../../images/404n.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-danger'>Mechanic Is Slepping</h2>
            <h3 className='text-center text-danger'>Page Not Found</h3>
            <img className='w-100' src={NotFound1} alt="" />
        </div>
    );
};

export default NotFound;