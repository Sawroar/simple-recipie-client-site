import React, { useEffect, useState } from 'react';
import RecipieCard from './RecipieCard';

const Recipies = () => {
    const [recipies, setRecipies] = useState([])
    useEffect(() => {
        fetch('recipies.json')
            .then(res => res.json())
            .then(data => setRecipies(data))
    }, [])
    return (
        <div className='grid gap-6 grid:cols-1 md:grid:cols-2 lg:grid-cols-3'>
            {recipies.map(recipie => <RecipieCard key={recipie._id} recipie={recipie}></RecipieCard>)}

        </div>
    );
};

export default Recipies;