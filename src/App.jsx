import React, { useState } from 'react';
import PortalManager from './components/PortalManager';
import ReviewManager from './components/ReviewManager';

function App() {
  const [activeSection, setActiveSection] = useState('portals');

  const navStyle = (isActive) => ({
    padding: '10px 20px',
    margin: '0 5px',
    border: 'none',
    backgroundColor: isActive ? '#007bff' : '#f8f9fa',
    color: isActive ? 'white' : '#333',
    cursor: 'pointer',
    borderRadius: '4px',
  });

  return (
    <div className="App" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Navegação Principal */}
      <nav style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: '0 0 20px 0', color: '#333' }}>PORTALES - Sistema de Gestão</h1>
        <div>
          <button
            onClick={() => setActiveSection('portals')}
            style={navStyle(activeSection === 'portals')}
          >
            Gerenciar Portais
          </button>
          <button
            onClick={() => setActiveSection('reviews')}
            style={navStyle(activeSection === 'reviews')}
          >
            Gerenciar Reviews
          </button>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main style={{ padding: '0 20px' }}>
        {activeSection === 'portals' && <PortalManager />}
        {activeSection === 'reviews' && <ReviewManager />}
      </main>
    </div>
  );
}

export default App;

