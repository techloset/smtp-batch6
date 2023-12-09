// components/Header.js
import React from 'react';
import styles from '../../../styles/Header.module.css'; // Import your CSS file

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Bill App</h1>
      {/* Add any additional header content or navigation links here */}
    </header>
  );
};

export default Header;
