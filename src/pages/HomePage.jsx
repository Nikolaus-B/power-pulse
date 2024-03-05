import React, { useState } from 'react';
import MobileMenu from '../components/MobileMenu/MobileMenu';

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      HomePage
      {/* Button to open/close the menu */}
      <button onClick={toggleMenu}>Toggle Menu</button>
      {/* Render the MobileMenu component with the isOpen prop */}
      <MobileMenu isOpen={menuOpen} />
    </div>
  );
}

export default HomePage;
