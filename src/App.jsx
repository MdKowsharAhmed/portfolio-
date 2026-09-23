// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

export default function App() {
  return (
    <div 
      style={{
        backgroundColor: '#0b1120',
        color: '#f8fafc',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        minHeight: '100vh',
        overflowX: 'hidden'
      }}
    >
      <Navbar />
      <Hero />
      <Experience />
      <Achievements />
      <Skills />
      <Certifications />
      <Footer />
    </div>
  );
}