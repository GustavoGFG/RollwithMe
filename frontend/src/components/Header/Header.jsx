import React from 'react';
import './Header.css';
const Header = ({ props }) => {
  return (
    <header>
      <button className="btn" onClick={() => props.rollAll()}>
        ROLL
      </button>
    </header>
  );
};

export default Header;
