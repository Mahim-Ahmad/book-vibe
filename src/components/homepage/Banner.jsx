import React from 'react';
import bookImg from "../../assets/pngwing 1.png";

const Banner = () => {
    return (
        <div className="hero min-h-[70vh] rounded-2xl my-8 contain-style mx-auto ">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-around">
                <img className="max-w-sm rounded-lg shadow-2xl"
                    src={bookImg}
                />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen<br/>up your bookshelf</h1>
                    <button className="btn btn-primary mt-5">View The Book</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;