import React, { useEffect, useState } from 'react';

const PortalList = () => {
  const [portals, setPortals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use a nova URL do backend deployado
  const BACKEND_URL = 'https://9yhyi3cp1pe0.manus.space';

  useEffect(() => {
    const fetchPortals = async () => {
      try {
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

    fetchPortals();
  }, []);

  if (loading) {
    return <div>Carregando portais...</div>;
  }

  if (error) {
    return <div>Erro ao carregar portais: {error.message}</div>;
  }

  return (
    <div className="portal-list">
      <h2>Lista de Portais</h2>
      {portals.length === 0 ? (
        <p>Nenhum portal encontrado.</p>
      ) : (
        <ul>
          {portals.map((portal) => (
            <li key={portal.id}>
              <h3>{portal.name}</h3>
              <p>{portal.description}</p>
              <p>Categoria: {portal.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PortalList;

