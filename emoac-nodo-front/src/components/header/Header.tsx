import React from 'react';

interface HeaderProps {
  title: string;
}

const header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  backgroundColor: '#282c34',
  padding: '20px',
  color: 'white',
  textAlign: 'center'
};

export default header;
