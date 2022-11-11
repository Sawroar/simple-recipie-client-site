import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipieCard from './RecipieCard';


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
            <div className='flex justify-center text-center items-center my-20'>
                <Link to='/recipies'><button className='btn bg-emerald-500	 hover:bg-emerald-700 text-white font-semibold border-none'>See All</button></Link>
            </div>
        </div>
    );
};

export default Recipies;