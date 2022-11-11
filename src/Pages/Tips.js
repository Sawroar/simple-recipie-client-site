import React from 'react';


const Tips = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center text-4xl font-semibold my-10'>Cooking Tips</h1>

            <div className='grid lg:grid-cols-2 gap-10'>

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <article className="card-title prose prose-zinc"> <blockquote>
                            “I cook, I create, I’m incredibly excited by what I do, I’ve still got a lot to achieve.”  <br />
                            -Gordon Ramsay</blockquote>
                        </article>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <article className="card-title prose prose-zinc"> <blockquote>
                            "You don't need a silver fork to eat good food."   <br />
                            Paul Prudhomme.</blockquote>
                        </article>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <article className="card-title prose prose-zinc"> <blockquote>
                            “Cooking is an observation-based process that you can’t do if you’re so completely focused on a recipe.”
                            <br />
                            -Alton Brown.</blockquote>
                        </article>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <article className="card-title prose prose-stone"> <blockquote>
                            "Food is a necessary component to life. People can live without Renoir, Mozart, Gaudi, Beckett, but they cannot live without food."
                            <br /> -Grant Achatz.</blockquote>
                        </article>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default Tips;