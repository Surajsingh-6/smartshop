import React, { useState, useEffect } from 'react';

function Showcase() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("./data.json") // Fetch data from the JSON file in the public folder
            .then((response) => response.json()) // Parse the response as JSON
            .then((data) => {
                // Access the array inside the "Sheet1" key
                setData(data.Sheet1); // Set the "Sheet1" array into the state
            })
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    return (
        <div className="w-full h-min">
            <div className="flex flex-wrap justify-evenly m-10 ">
                {data.map((item) => (
                    <div
                        key={item["S.No"]} // Use the "S.No" as the unique key for each item
                        className="h-20 lg:h-36 aspect-square m-5 my-14v border-2 my-14"
                    >
                        <img
                            src={item.Image} // Image URL from the data
                            alt={item.Productname} // Use the product name as alt text
                            className="w-full h-full object-cover rounded-lg bg-no-repeat bg-cover"
                        />
                        <div className="p-2 text-center">
                            <h3 className="text-lg">{item.Productname}</h3>
                            <p>{item.Category}</p>
                            <p>{item.Rate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Showcase;
