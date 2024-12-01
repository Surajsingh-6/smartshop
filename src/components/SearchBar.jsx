import React, { useState } from 'react';

const SearchBar = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the data based on the search query
  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

return (
    <div className="flex flex-col items-center p-4">
        <div className="relative w-full max-w-md">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-10 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35M18 10a8 8 0 10-8 8 8 8 0 008-8z"
                    />
                </svg>
            </span>
        </div>
        {searchQuery && (
            <ul className="mt-4 w-full max-w-md">
                {filteredData.length === 0 ? (
                    <li className="text-center text-gray-500">No results found</li>
                ) : (
                    filteredData.map((item, index) => (
                        <li key={index} className="py-1 px-2 border-b border-gray-200">{item}</li>
                    ))
                )}
            </ul>
        )}
    </div>
);
};

export default SearchBar;
