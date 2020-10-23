import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap');
  
  :root {
    --color-bg-primary: #fff;
    --color-bg-secondary: #eaecef;
    --color-bg-accent: #c8e1ff;
    --color-bg-dark: #333333;
    --color-bg-gray: #7c7c7c;
    
    --color-border-primary: #e1e4e8;
    --color-border-monitor: #333333;
    --color-border-stand: #222222;
    
    --color-text-primary: #2f363d;
    --color-text-secondary: #6a737d;
    
    --shadow-light: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 14px;
    color: var(--color-text-primary);
    padding: 24px;    
    overflow: hidden;
  }
  
  ::-webkit-scrollbar {
    width: 6px;
  }
   
  ::-webkit-scrollbar-track {
    //box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
   
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-bg-gray);
    border-radius: 4px;
  }
  
  a {
    text-decoration: none;
    color: var(--color-text-primary);
  }
`;
