import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, Name, img, descriptoin, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>Service:{Name}</h2>
            <p>Price: ${price}</p>
            <p><small>{descriptoin}</small></p>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Book It: {Name}</button>
        </div>
    );
};

export default Service;