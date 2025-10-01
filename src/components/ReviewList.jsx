import React, { useState, useEffect } from 'react';

const ReviewList = ({ portalId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BACKEND_URL = 'https://xlhyimcd99ed.manus.space';

  useEffect(() => {
    fetchReviews();
  }, [portalId]);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_URL}/api/portals/${portalId}/reviews`);
      const data = await response.json();
      
      if (response.ok) {
        setReviews(data.reviews);
        setError(null);
      } else {
        setError(data.message || 'Erro ao carregar reviews');
      }
    } catch (err) {
      setError('Erro de conexão com o servidor');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    if (!window.confirm('Tem certeza que deseja deletar este review?')) {
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/reviews/${reviewId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setReviews(reviews.filter(review => review.id !== reviewId));
      } else {
        const data = await response.json();
        alert(data.message || 'Erro ao deletar review');
      }
    } catch (err) {
      alert('Erro de conexão com o servidor');
    }
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Carregando reviews...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>Erro: {error}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h3>Reviews do Portal ({reviews.length})</h3>
      
      {reviews.length === 0 ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>
          Nenhum review encontrado para este portal.
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {reviews.map((review) => (
            <div
              key={review.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '18px', color: '#ffa500', marginBottom: '5px' }}>
                    {renderStars(review.rating)}
                  </div>
                  <p style={{ margin: '0', lineHeight: '1.5' }}>{review.comment}</p>
                  <small style={{ color: '#666', marginTop: '10px', display: 'block' }}>
                    Usuário ID: {review.user_id} | Review ID: {review.id}
                  </small>
                </div>
                <button
                  onClick={() => handleDeleteReview(review.id)}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewList;

