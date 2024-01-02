import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';
import './AppDarkTheme.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme === 'dark' ? '#282c34' : 'white')};
    color: ${(props) => (props.theme === 'dark' ? 'white' : 'black')};
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <GlobalStyle theme={theme} />
      <div className={`header ${theme === 'dark' ? 'dark' : ''}`}>
        <h1>Theme Switcher</h1>
        <Button className="button" onClick={toggleTheme}>
          {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        </Button>
      </div>
      <div className="container">
        <p>This is the main content of your application.</p>
      </div>
    </>
  );
}

export default App;
