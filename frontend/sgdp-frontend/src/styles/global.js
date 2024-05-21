import { memo } from 'react';
import { createGlobalStyle } from 'styled-components';

export default memo(createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: var(--fonts) !important;
  }

  html, body, #root {
    height: 100vh;
    width: 100%;
    position: relative;
    background: #171821;
    font-family: var(--fonts) !important;
    scroll-behavior: smooth;
    color: #87888C;

    &::-webkit-scrollbar {
      width: 8px;
      background: #000;
    }
    &::-webkit-scrollbar-thumb{
      background: var(--color-primary);
      border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--color-primary-dark);
    }
  }

  button, input, a {
    font-family: var(--fonts) !important;
    text-decoration: none;
    cursor: pointer;
  }
  
  :root {
    font-size: 16px !important;
    font-display: swap;

    --color-background-primary: #171821;
    --color-background-secondary: #21222D;
    --color-background-tertiary: #333333;
    --color-primary: #A9DFD8;
    --color-text: #87888C;


    --font-title-size: 40px;
    --border-radius: 4px;
    --medium-border-radius: 10px;
    --big-border-radius: 20px;
    --transition: .2s ease-in-out;

    --fonts: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;

    --font-big-size: 3.2rem; //(51.2px)
    --font-medium-size: 48px;
    --font-big-title-size: 2.5rem; //(40px)
    --font-title-size: 1.5rem; //(24px)
    --font-small-title-size: 1.2rem; //(19.2px)
    --font-big-subtitle-size: 1.5rem; //(24px)
    --font-subtitle-size: 1rem; //(16px)
    --font-big-text-size: 1.2rem;//(19.2px)
    --font-text-size: 0.9rem; //(14.4px)
    --font-description-size: 0.8rem; //(12.8px)
    --font-inscricao: 1rem; //(16px)

    @media screen and (min-width: 1600px)  {
      --font-big-size: 70px;
      --font-big-text-size: 24px;
      --font-big-subtitle-size: 36px;
    }

    @media screen and (min-width: 600px) and (max-width: 1400px){
      --font-big-size: 2.5rem;
      --font-big-text-size: 1rem;
      --font-big-subtitle-size: 1.5rem;
    }

    @media screen and (max-width: 600px) {
      --font-big-size: 2.2rem;
      --font-medium-size: 32px;
      --font-big-title-size: 2rem;
      --font-big-subtitle-size: 24px;
      --font-title-size: 1.2rem;
      --font-subtitle-size: 0.9rem;
      --font-big-text-size: 1rem;
      --font-text-size: 0.8rem;
      --font-description-size: 0.7rem;

      --font-big-premium: 35.2px;
      --font-medium-premium: 2rem;
      --font-big-subtitle-premium: 24px;
      --font-title-premium: 19px;
      --font-big-text-premium: 1rem;
      --font-subtitle-premium: 14.4px;
      --font-text-premium: 12.8px;
      --font-description-premium: 11.2px;
      --font-inscricao: 11.2px;
    }
  }
`);
