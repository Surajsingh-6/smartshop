import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
// import Hero from './components/Hero';
import Showcase from './components/Showcase';
import './index.css';

function App() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch("./data.json") 
            .then((response) => response.json()) 
            .then((data) => {
                setData(data.Sheet1); 
            })
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    // Filter the data based on the search query
    const filteredData = data.filter(item =>
        item.Productname.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.Category.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.Rate.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full h-screen custombg">
            <Navbar />
            {/* Pass searchQuery and setSearchQuery to SearchBar */}
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {/* <Hero /> */}
            {/* Pass the filtered data to Showcase */}
            <Showcase data={filteredData} />
            <Footer />
            <div className='h-14 w-full'>\
              {/* just a blank space don't remove */}
            </div>
        </div>
    );
}

export default App;
