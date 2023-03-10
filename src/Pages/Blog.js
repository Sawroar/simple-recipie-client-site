import React from 'react';

const Blog = () => {
    return (
        <div className='lg:px-20 my-20'>
            <h2 className='text-center text-5xl font-semibold my-5'>Frequently Asked Questions</h2>
            <div className='grid grid-cols-1'></div>
            <div className='border-2 rounded-lg p-5'>
                <h2 className='text-2xl bg-orange-500 text-white font-bold py-2 my-5'>
                    What is the defference between SQL and NoSQL?</h2>
                <p className='texl-lg font-semibold'>
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
            <div className='border-2 rounded-lg p-5 my-5'>
                <h2 className='text-2xl bg-orange-500 text-white font-bold py-2 my-5'>
                    What is JWT? How does JWT works?</h2>
                <p className='texl-lg font-semibold'>
                    JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                </p>
            </div>
            <div className='border-2 rounded-lg p-5'>
                <h2 className='text-2xl bg-orange-500 text-white font-bold py-2 my-5'>
                    What is the defference between Javascript and Node.js?</h2>
                <p className='texl-lg font-semibold'>
                    <span className='font-bold text-xl'>  Defference between Javascript and Node.js are -</span> <br /> <br />
                    1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. <br />

                    As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br /> <br />

                    2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br /> <br />

                    3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. <br /> <br />

                    4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific. <br />

                    Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive. <br /> <br />

                    5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input. <br />

                    Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.
                </p>
            </div>
            <div className='border-2 rounded-lg p-5'>
                <h2 className='text-2xl bg-orange-500 text-white font-bold py-2 my-5'>
                    How does Node.js handle multiple requests at the same time?</h2>
                <p className='texl-lg font-semibold'>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br /> <br />

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </p>
            </div>

        </div>
    );
};

export default Blog;