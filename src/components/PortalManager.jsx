import React, { useState, useEffect } from 'react';
import PortalList from './PortalList';
import CreatePortal from './CreatePortal';

const PortalManager = () => {
  const [portals, setPortals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('list');

  // Use a nova URL do backend deployado
  const BACKEND_URL = 'https://9yhyi3cp1pe0.manus.space';

  const fetchPortals = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_URL}/api/portals`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPortals(data.portals);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortals();
  }, []);

  const handlePortalCreated = (newPortal) => {
    setPortals(prev => [...prev, newPortal]);
    setActiveTab('list'); // Volta para a aba de listagem após criar
  };

  const handleDeletePortal = async (portalId) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/portals/${portalId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Remove o portal da lista local
      setPortals(prev => prev.filter(portal => portal.id !== portalId));
    } catch (error) {
      console.error('Erro ao deletar portal:', error);
      alert('Erro ao deletar portal: ' + error.message);
    }
  };

  const tabStyle = {
    padding: '0.75rem 1.5rem',
    border: 'none',
    backgroundColor: '#f8f9fa',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    marginRight: '0.5rem'
  };

  const activeTabStyle = {
    ...tabStyle,
    backgroundColor: '#007bff',
    color: 'white',
    borderBottom: '2px solid #007bff'
  };

  return (
    <div className="portal-manager" style={{ padding: '2rem' }}>
      <h1>Gerenciador de Portais</h1>
      
      {/* Navegação por abas */}
      <div className="tabs" style={{ marginBottom: '2rem', borderBottom: '1px solid #dee2e6' }}>
        <button
          style={activeTab === 'list' ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab('list')}
        >
          Lista de Portais
        </button>
        <button
          style={activeTab === 'create' ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab('create')}
        >
          Criar Portal
        </button>
      </div>

      {/* Conteúdo das abas */}
      {activeTab === 'list' && (
        <div className="portal-list-tab">
          {loading ? (
            <div>Carregando portais...</div>
          ) : error ? (
            <div style={{ color: 'red' }}>Erro ao carregar portais: {error.message}</div>
          ) : (
            <div>
              <h2>Lista de Portais ({portals.length})</h2>
              {portals.length === 0 ? (
                <p>Nenhum portal encontrado. <button onClick={() => setActiveTab('create')} style={{ color: '#007bff', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}>Criar o primeiro portal</button></p>
              ) : (
                <div className="portals-grid" style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                  {portals.map((portal) => (
                    <div key={portal.id} style={{ 
                      border: '1px solid #dee2e6', 
                      borderRadius: '8px', 
                      padding: '1rem',
                      backgroundColor: '#f8f9fa'
                    }}>
                      <h3 style={{ marginTop: 0, color: '#007bff' }}>{portal.name}</h3>
                      <p style={{ color: '#6c757d', marginBottom: '0.5rem' }}>
                        <strong>Categoria:</strong> {portal.category}
                      </p>
                      <p style={{ marginBottom: '1rem' }}>{portal.description}</p>
                      <button
                        onClick={() => handleDeletePortal(portal.id)}
                        style={{
                          backgroundColor: '#dc3545',
                          color: 'white',
                          border: 'none',
                          padding: '0.5rem 1rem',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '0.875rem'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
                      >
                        Deletar
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {activeTab === 'create' && (
        <div className="create-portal-tab">
          <CreatePortal onPortalCreated={handlePortalCreated} />
        </div>
      )}
    </div>
  );
};

export default PortalManager;

