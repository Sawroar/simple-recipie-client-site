import React from 'react';
import cooking from './../../../Assets/cock.jpg'
import cook from './../../../Assets/coc.jpg'
import cookings from './../../../Assets/coke.jpg'
const HomePageExtra = () => {
    return (
        <div>

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

export default HomePageExtra;