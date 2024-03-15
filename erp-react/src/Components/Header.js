// Header.js

import React from 'react';
import logo from '../erp.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" style={{ width: '100px', height: 'auto' }} />
        <h1 style={{ margin: '0' }}>ERP SYSTEM</h1>
      </div>
    </header>
  );
}

export default Header;
