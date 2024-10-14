import React, { useState } from 'react';
import { getNodoDto } from '../../types/dto/get-nodos.dto';

interface NodoProps {
  nodo: getNodoDto;
  onSelect: (nodo: getNodoDto) => void;
}

const Node: React.FC<NodoProps> = ({ nodo, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const hasChildren = nodo.nodeList && nodo.nodeList.length > 0;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSelect = () => {
    onSelect(nodo);
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <div style={nodeStyle}>
        {hasChildren && (
          <button onClick={handleToggle} style={buttonStyle}>
            {isExpanded ? '-' : '+'}
          </button>
        )}
        <span onClick={handleSelect} style={textStyle}>
          {nodo.node}
        </span>
      </div>
      {hasChildren && isExpanded && (
        <div>
          {nodo.nodeList!.map((child) => (
            <Node key={child.id} nodo={child} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
};

const nodeStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
};

const buttonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'center', 
  backgroundColor: '#007bff', 
  color: 'white',
  border: 'none', 
  borderRadius: '4px', 
  padding: '8px 12px',
  cursor: 'pointer',
  transition: 'background-color 0.3s', 
  margin: '4px 0',
};

const textStyle: React.CSSProperties = {
  userSelect: 'none',
  marginLeft: '8px',
};

export default Node;
