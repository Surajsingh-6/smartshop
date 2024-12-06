import React from 'react';

const Showcase = ({ data }) => {
    return (
        <div className="w-full h-min">
            <div className="flex flex-wrap justify-evenly ">
                {data.length === 0 ? (
                    <p className="text-center text-gray-500">No results found</p>
                ) : (
                    data.map((item) => (
                        <div
                            key={item["S.No"]}
                            className="h-32 lg:h-36 aspect-square mx-2 border-2 my-12"
                        >
                            <img
                                src={item.Image}
                                alt={item.Productname}
                                className="w-full h-full object-cover rounded-lg bg-no-repeat bg-cover"
                            />
                            <div className="p-2 text-center">
                                <h3 className="text-lg">{item.Productname}</h3>
                                <p>{item.Rate}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Showcase;
