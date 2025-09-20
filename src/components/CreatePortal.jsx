import React, { useState } from 'react';

const CreatePortal = ({ onPortalCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Use a nova URL do backend deployado
  const BACKEND_URL = 'https://9yhyi3cp1pe0.manus.space';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${BACKEND_URL}/api/portals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSuccess(true);
      setFormData({ name: '', description: '', category: '' });
      
      // Callback para atualizar a lista de portais
      if (onPortalCreated) {
        onPortalCreated(data.portal);
      }

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-portal">
      <h2>Criar Novo Portal</h2>
      
      {success && (
        <div className="success-message" style={{ color: 'green', marginBottom: '1rem' }}>
          Portal criado com sucesso!
        </div>
      )}
      
      {error && (
        <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>
          Erro: {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Nome do Portal:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              marginTop: '0.25rem',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            style={{
              width: '100%',
              padding: '0.5rem',
              marginTop: '0.25rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              resize: 'vertical'
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <label htmlFor="category">Categoria:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.5rem',
              marginTop: '0.25rem',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          >
            <option value="">Selecione uma categoria</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Educação">Educação</option>
            <option value="Arte">Arte</option>
            <option value="Negócios">Negócios</option>
            <option value="Entretenimento">Entretenimento</option>
            <option value="Geral">Geral</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: loading ? '#ccc' : '#007bff',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '1rem'
          }}
        >
          {loading ? 'Criando...' : 'Criar Portal'}
        </button>
      </form>
    </div>
  );
};

export default CreatePortal;

