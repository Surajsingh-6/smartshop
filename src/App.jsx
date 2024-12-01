import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Hero from './components/Hero';
import Showcase from './components/Showcase';
function App() {
  const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <SearchBar data={items} />
      <Hero />
      <Showcase />
      <Footer />
    </div>
  )
}

export default App