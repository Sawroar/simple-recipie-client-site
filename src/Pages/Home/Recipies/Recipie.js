import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthoContext } from '../../../context/AuthProvider';

const Recipie = () => {
    const { _id, img, time, description, price, title } = useLoaderData()
    const { user } = useContext(AuthoContext)
    const handlePlaceOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email, phone, message
        }
        // if (phone.length > 10) {
        //     alert('phone number should be 10 characters or longer')
        // }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('order placed successfully')
                    form.reset()
                }

            })
            .catch(error => console.error(error))
    }
    return (
        <div className="card card-compact mt-5 w-98 bg-base-100 shadow-xl mb-4">
            <figure><img src={img} alt="Shoes" className='rounded-lg shadow-2xl' /></figure>
            <div className="card-body mt-2">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>${price}</p>
                <p className='text-2xl text-orange-600 font-semibold'>{time}</p>
                <p className='text-xl text-gray-600 font-semibold'>{description}</p>

                <div>
                    <form onSubmit={handlePlaceOrder}>
                        <div>  <h1 className='text-center text-5xl mt-5'>Your Reviews here</h1></div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-20 shadow-lg rounded-md my-4'>

                            <div>
                                <h2 className='text-2xl text-gray-800'>Your First Name</h2>
                                <input name='firstName' type="text" placeholder="Your Name" className="input input-ghost w-full input-bordered" />
                            </div>
                            <div>
                                <h2 className='text-2xl text-gray-800'>Your Last Name</h2>
                                <input name='lastName' type="text" placeholder="Your Last Name" className="input input-ghost w-full input-bordered" />
                            </div>
                            <div>
                                <h2 className='text-2xl text-gray-800'>Your Phone</h2>
                                <input name='phone' type="text" required placeholder="Your Phone Number" className="input input-ghost w-full  my-15 input-bordered" />
                            </div>
                            <div>
                                <h2 className='text-2xl text-gray-800'>Your Email</h2>
                                <input name='email' type="text" defaultValue={user?.email} readOnly placeholder="YourEmail" className="input input-ghost w-full my-15 input-bordered" />

                            </div>
                            <textarea name='message' className="textarea textarea-bordered h-24 my-35 w-full" placeholder="Your Message"></textarea>
                            <div>

                                <input type="submit" className="btn btn-orange " value="Place Your Review" />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Recipie;