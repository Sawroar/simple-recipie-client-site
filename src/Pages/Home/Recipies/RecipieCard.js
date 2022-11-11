import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const RecipieCard = ({ recipie }) => {
    const { _id, img, time, description, price, title } = recipie
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>${price}</p>
                <p className='text-2xl text-orange-600 font-semibold'>{time}</p>
                <p className='text-xl text-gray-600 font-semibold'>{description.slice(0, 90)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/recipie/${_id}`}
                    >

                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecipieCard;