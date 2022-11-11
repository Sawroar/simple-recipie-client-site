import React, { useEffect, useState } from 'react';
import RecipieCard from './RecipieCard';
import cooking from './../../../Assets/cock.jpg'
import cook from './../../../Assets/coc.jpg'
import cookings from './../../../Assets/coke.jpg'

const Recipies = () => {
    const [recipies, setRecipies] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/recipies')
            .then(res => res.json())
            .then(data => setRecipies(data))
    }, [])
    return (
        <div className='grid gap-6 grid:cols-1 md:grid:cols-2 lg:grid-cols-3 p-15'>
            {recipies.map(recipie => <RecipieCard key={recipie._id} recipie={recipie}></RecipieCard>)}

            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={cook} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={cookings} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={cooking} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipies;