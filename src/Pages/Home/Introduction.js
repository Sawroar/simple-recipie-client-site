import React from 'react';
import cake from './../../Assets/h5-img-1.jpg'
import about from './../../Assets/about.jpg'

const Introduction = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-row lg:flex-row gap-4">
                <div className='w-2/4'>
                    <img src={cake} alt='/' className="rounded-lg shadow-2xl" />

                </div>
                <div className='w-2/4 my-5'>
                    <img src={about} alt="" />
                    <h1 className="text-6xl font-bold">One bowl chocolate cake recipe!</h1>
                    <p className="py-6">We porvide you <span className='text-3xl font-bold'>simple</span> delicious<span className='text-3xl font-bold'>recipies</span>.It will give you encouragement in your life.The best chocolate cake recipe. Ever? There are plenty of claims for the best chocolate cake recipe. I get that. But with one bite of this decadent, moist chocolate cake with chocolate frosting, every single person around the table commented that this was the best chocolate cake they’d ever tasted.</p>
                    <button className="btn btn-active btn-secondary">Explore</button>
                </div>
            </div>

        </div>
    );
};

export default Introduction;