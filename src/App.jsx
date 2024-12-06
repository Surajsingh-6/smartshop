import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Showcase from "./components/Showcase";
import Hero from "./components/Hero";
import "./index.css";

function App() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedImage, setSelectedImage] = useState(null); // State to manage the selected image
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    useEffect(() => {
        fetch("./data.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data.Sheet1);
            })
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    // Filter the data based on the search query
    const filteredData = data.filter(
        (item) =>
            item.Productname.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.Category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.Rate.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle image click to open the modal
    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };

    // Handle closing the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="relative h-full w-full bg-slate-950">
            
            <Navbar />
            {/* Pass searchQuery and setSearchQuery to SearchBar */}
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {/* Pass the filtered data and image click handler to Showcase */}
            <Hero/>
            <Showcase data={filteredData} onImageClick={handleImageClick} />
            
            <div className="h-14 w-full">
                {/* just a blank space, don't remove */}
            </div>

            {/* Modal to display large image */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-4 rounded-lg">
                        <button
                            onClick={closeModal}
                            className="absolute top-0 right-0 h-10 w-10 bg-red-500 text-white rounded-full"
                        >
                            X
                        </button>
                        <img src={selectedImage} alt="Selected Product" className="max-w-full max-h-96" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
