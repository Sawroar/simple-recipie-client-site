import React from 'react';
import Recipies from './Recipies/Recipies';
import Introduction from './Introduction';
import Tips from '../Tips';

const Home = () => {
    return (
        <div className='lg:px-20' >
            <Introduction></Introduction>
            <Recipies></Recipies>

            <Tips></Tips>

        </div>

    );
};

export default Home;