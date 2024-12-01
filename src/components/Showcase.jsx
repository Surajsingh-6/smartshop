import React from "react";

function Showcase() {
    const pics = [
        "./1.png",
        "./2.png",
        "./3.png",
        "./4.png",
        "./5.png",
        "./6.png",
    ];
    return (
        <div className="w-full h-min">
            <div className="flex flex-wrap justify-evenly">
                {
                    pics.map((pic, index) => {
                        return (
                            <div key={index} className='h-36 aspect-square m-5 border-2'>
                                <img src={pic} alt="" className='w-full h-full object-contain rounded-lg  bg-no-repeat bg-cover' />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Showcase;
