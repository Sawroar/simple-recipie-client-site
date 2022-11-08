import React from 'react';
import cake from './../../Assets/h5-img-1.jpg'
import about from './../../Assets/about.jpg'
import Recipies from './Recipies/Recipies';
import Introduction from './Introduction';

const Home = () => {
    return (
        <div >
            <Introduction></Introduction>
            <Recipies></Recipies>

        </div>

    );
};

export default Home;