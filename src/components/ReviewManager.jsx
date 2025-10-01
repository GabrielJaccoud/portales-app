import React, { useState } from 'react';
import ReviewList from './ReviewList';
import CreateReview from './CreateReview';

const ReviewManager = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [selectedPortalId, setSelectedPortalId] = useState(1);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleReviewCreated = (newReview) => {
    // Força a atualização da lista de reviews
    setRefreshKey(prev => prev + 1);
    setActiveTab('list'); // Volta para a aba de listagem
  };

  const tabStyle = (isActive) => ({
    padding: '10px 20px',
    border: 'none',
    backgroundColor: isActive ? '#007bff' : '#f8f9fa',
    color: isActive ? 'white' : '#333',
    cursor: 'pointer',
    borderRadius: '4px 4px 0 0',
    marginRight: '2px',
  });

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>Gerenciador de Reviews</h2>
      
      {/* Seletor de Portal */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Selecionar Portal:
        </label>
        <select
          value={selectedPortalId}
          onChange={(e) => setSelectedPortalId(parseInt(e.target.value))}
          style={{
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        >
          <option value={1}>Portal de Exemplo (ID: 1)</option>
          <option value={2}>Portal de Teste (ID: 2)</option>
        </select>
      </div>

      {/* Abas de Navegação */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setActiveTab('list')}
          style={tabStyle(activeTab === 'list')}
        >
          Lista de Reviews
        </button>
        <button
          onClick={() => setActiveTab('create')}
          style={tabStyle(activeTab === 'create')}
        >
          Criar Review
        </button>
      </div>

      {/* Conteúdo das Abas */}
      <div style={{ border: '1px solid #ddd', borderRadius: '0 4px 4px 4px', minHeight: '400px' }}>
        {activeTab === 'list' && (
          <ReviewList 
            key={`${selectedPortalId}-${refreshKey}`} 
            portalId={selectedPortalId} 
          />
        )}
        {activeTab === 'create' && (
          <CreateReview 
            portalId={selectedPortalId} 
            onReviewCreated={handleReviewCreated}
          />
        )}
      </div>
    </div>
  );
};

export default ReviewManager;

