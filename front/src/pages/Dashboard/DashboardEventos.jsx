import React from 'react';

const DashboardEventos = () => {
  return (
    
    <div style={{ width: '100%', height: '100vh', border: 'none' }}>
        <br /><br />
      <iframe
        src="http://localhost:8050/dashboard-eventos/"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Dashboard de Formaciones"
      ></iframe>
    </div>
  );
}

export default DashboardEventos;
