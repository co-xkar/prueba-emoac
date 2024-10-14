import React, { useEffect, useState } from 'react';
import Node from './nodo';
import { getNodoDto } from '../../types/dto/get-nodos.dto';
import { getNodos } from '../../services/nodos-services/get-nodos.service';

const TreeView: React.FC = () => {
  const [nodos, setNodos] = useState<getNodoDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [selectedNodo, setSelectedNodo] = useState<getNodoDto | null>(null);

  useEffect(() => {
    const fetchNodos = async () => {
      try {
        const data = await getNodos();
        setNodos(data);
      } catch (err) {
        setError('Error al obtener los nodos.');
      } finally {
        setLoading(false);
      }
    };

    fetchNodos();
  }, []);

  const handleSelect = (nodo: getNodoDto) => {
    setSelectedNodo(nodo);
  };

  const calculateTotalValue = (node: getNodoDto): number => {
    const childrenValue = node.nodeList ? node.nodeList.reduce((sum, child) => sum + calculateTotalValue(child), 0) : 0;
    return node.value + childrenValue;
  };

  if (loading) {
    return <p>Cargando nodos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={treeContainerStyle}>
        <h2>Lista de nodos</h2>
        {nodos.map((nodo) => (
          <Node key={nodo.id} nodo={nodo} onSelect={handleSelect} />
        ))}
      </div>
      <div style={detailsContainerStyle}>
        <h2>Nodo seleccionado</h2>
        {selectedNodo ? (
          <div>
            <p>
              <strong>ID:</strong> {selectedNodo.id}
            </p>
            <p>
              <strong>Node:</strong> {selectedNodo.node}
            </p>
            <p>
              <strong>Total Value:</strong> 
              <span style={totalValueStyle}> {calculateTotalValue(selectedNodo)}</span>
            </p>
            <p>
              <strong>Value:</strong> {selectedNodo.value}
            </p>
            {selectedNodo.nodeList && selectedNodo.nodeList.length > 0 && (
              <div>
                <strong>Hijos:</strong>
                <ul>
                  {selectedNodo.nodeList.map((child) => (
                    <p style={liStyle} key={child.id}>
                      {child.node}
                    </p>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <p>Selecciona un nodo para ver sus detalles.</p>
        )}
      </div>
    </div>
  );
};

const treeContainerStyle: React.CSSProperties = {
  width: '50%',
  padding: '20px',
  borderRight: '1px solid #ccc',
};

const detailsContainerStyle: React.CSSProperties = {
  width: '50%',
  padding: '20px',
};

const totalValueStyle: React.CSSProperties = {
  color: 'green',
};

const liStyle: React.CSSProperties = {
  listStyleType: 'none',
  width: '90%',
};

export default TreeView;
