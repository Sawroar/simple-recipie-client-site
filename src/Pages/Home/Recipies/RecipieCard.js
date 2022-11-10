import React from 'react';

const RecipieCard = ({ recipie }) => {
    const { img, time, description, price, title } = recipie
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4">
            <figure><img height={'100px'} width={'500px'} src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>${price}</p>
                <p className='text-2xl text-orange-600 font-semibold'>{time}</p>
                <p className='text-xl text-gray-600 font-semibold'>{description.slice(0, 90)}...</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default RecipieCard;