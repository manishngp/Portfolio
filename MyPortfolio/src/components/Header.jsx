import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (<>
      
        <Navbar />
        <section style={{
      position: 'relative',
      zIndex: 10,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 10%',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        gap: '40px'
      }}>
        
        {/* Left Container */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{
  fontFamily: '"Anton", sans-serif',
    fontSize: '90px',
    lineHeight: '0.85',        // Very tight to stack the words like the image
    letterSpacing: '-5px',
     // Condensed look
    margin: '0',
    
    // We use transform scaleX to make the font look even more "condensed/tall"
    transform: 'scaleX(0.85)', 
    transformOrigin: 'left',   // Slight negative spacing for that "bold" look
}}>
    <span style={{ color: '#00FF66' }}>FRONTEND</span>
    <br />
    <span style={{ color: '#DEDEDE', paddingLeft: '0.5ch' }}>DEVELOPER</span>
</h1>

          <p style={{
            fontFamily: '"Roboto Flex", sans-serif',
            fontSize: '18px',
            lineHeight: '28px',
            color: 'rgb(181, 181, 181)',
            fontWeight: '400',
            marginTop: '24px',
            maxWidth: '450px'
          }}>
            Hi! I'm Manish. Frontend Developer who turns ideas into fast, 
            responsive, and engaging web interfaces using modern frontend technologies.
          </p>

          <button style={{
            marginTop: '32px',
            padding: '12px 24px',
            borderRadius: '50px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            background: 'rgba(255, 255, 255, 0.05)',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span>📄</span> Download CV
          </button>
        </div>

        {/* Right Container */}
        <div style={{ flex: '0.8', minWidth: '300px' }}>
          <p style={{
            fontFamily: '"Roboto Flex", sans-serif',
            fontSize: '18px',
            lineHeight: '28px',
            color: 'rgb(181, 181, 181)',
            fontWeight: '400',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            paddingLeft: '30px'
          }}>
            I craft beautiful, interactive web experiences with modern technologies.
            Passionate about clean code, stunning designs, and seamless user experiences.
          </p>
        </div>

      </div>
    </section>
    </>
    )
}

export default Header