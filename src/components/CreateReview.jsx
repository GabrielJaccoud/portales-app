import React, { useState } from 'react';

const CreateReview = ({ portalId, onReviewCreated }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = 'https://xlhyimcd99ed.manus.space';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!comment.trim()) {
      alert('Por favor, escreva um comentário');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_URL}/api/portals/${portalId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating: parseInt(rating),
          comment: comment.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Review criado com sucesso!');
        setComment('');
        setRating(5);
        if (onReviewCreated) {
          onReviewCreated(data.review);
        }
      } else {
        alert(data.message || 'Erro ao criar review');
      }
    } catch (err) {
      alert('Erro de conexão com o servidor');
    } finally {
      setLoading(false);
    }
  };

  const renderStarSelector = () => {
    return (
      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: star <= rating ? '#ffa500' : '#ddd',
            }}
          >
            ★
          </button>
        ))}
        <span style={{ marginLeft: '10px', color: '#666' }}>
          ({rating} estrela{rating !== 1 ? 's' : ''})
        </span>
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h3>Criar Novo Review</h3>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Avaliação:
          </label>
          {renderStarSelector()}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Comentário:
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Escreva seu comentário sobre este portal..."
            rows={4}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px',
              resize: 'vertical',
            }}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: loading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '16px',
          }}
        >
          {loading ? 'Criando...' : 'Criar Review'}
        </button>
      </form>
    </div>
  );
};

export default CreateReview;

