import React, { useState } from 'react';

const Navbar = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState('Introduction');

  // Function to handle click on a link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">My Portfolio</div>
        <ul className="flex space-x-4">
          <li><a href="#Introduction" className={`text-gray-300 hover:text-white ${activeLink === 'Introduction' ? 'text-white' : ''}`} onClick={() => handleLinkClick('Introduction')}>Introduction</a></li>
          <li><a href="#Education" className={`text-gray-300 hover:text-white ${activeLink === 'Education' ? 'text-white' : ''}`} onClick={() => handleLinkClick('Education')}>Education</a></li>
          <li><a href="#Projects" className={`text-gray-300 hover:text-white ${activeLink === 'Projects' ? 'text-white' : ''}`} onClick={() => handleLinkClick('Projects')}>Projects</a></li>
          <li><a href="#Internships" className={`text-gray-300 hover:text-white ${activeLink === 'Internships' ? 'text-white' : ''}`} onClick={() => handleLinkClick('Internships')}>Internships</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
