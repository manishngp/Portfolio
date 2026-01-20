import React, { useState } from 'react';
import { Home, User, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  const navContainerStyle = {
    position: 'fixed',
    top: '30px',          // Space from the top
    right: '40px',        // Space from the right
    zIndex: 1000,
    display: 'flex',
    gap: '4px',           // Tighter gap for a sleek look
    padding: '6px',       // Padding around the whole pill
    background: 'rgba(10, 10, 15, 0.7)', 
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '100px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  };

  const getLinkStyle = (id) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: hovered === id ? '#fff' : 'rgba(255, 255, 255, 0.6)',
    textDecoration: 'none',
    padding: '10px 18px',
    borderRadius: '100px',
    fontSize: '13px',
    fontWeight: '500',
    letterSpacing: '0.5px',
    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)', // Smooth "Out-Quint" easing
    background: hovered === id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
  });

  return (
    <nav style={navContainerStyle}>
      {/* Home */}
      <a 
        href="#home" 
        style={getLinkStyle('home')}
        onMouseEnter={() => setHovered('home')}
        onMouseLeave={() => setHovered(null)}
      >
        <Home size={16} strokeWidth={2} />
        <span>Home</span>
      </a>

      {/* About */}
      <a 
        href="#about" 
        style={getLinkStyle('about')}
        onMouseEnter={() => setHovered('about')}
        onMouseLeave={() => setHovered(null)}
      >
        <User size={16} strokeWidth={2} />
        <span>About</span>
      </a>

      {/* Projects */}
      <a 
        href="#projects" 
        style={getLinkStyle('projects')}
        onMouseEnter={() => setHovered('projects')}
        onMouseLeave={() => setHovered(null)}
      >
        <Briefcase size={16} strokeWidth={2} />
        <span>Projects</span>
      </a>
    </nav>
  );
};

export default Navbar;