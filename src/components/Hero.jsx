import React from "react";

function Hero() {
    return (
        <div>
            <div className="w-full max-h-2/6 ">
                <img
                    src="./hero.jpg"
                    alt=""
                    className="bg-no-repeat bg-contain w-5/6  lg:w-1/4 lg:-rotate-90 m-auto my-10"
                />
            </div>
        </div>
    );
}

export default Hero;
