import React from 'react';

const Dashboard = () => {
  return (
    
    <div style={{ width: '100%', height: '100vh', border: 'none' }}>
        <br /><br />
      <iframe
        src="http://localhost:8050/dashboard-formaciones"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Dashboard de Formaciones"
      ></iframe>
    </div>
  );
}

export default Dashboard;
