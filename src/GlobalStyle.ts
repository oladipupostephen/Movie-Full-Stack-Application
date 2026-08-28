import {createGlobalStyle} from 'styled-components';

// Exporting the global style

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #ffffff;
    --lightGrey: #eee;
    --mediumGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMedium: 1.2rem;
    --fontSmall: 1rem;
  }
  
  //General Style
  
  *{
    box-sizing: border-box;
    font-family: Raleway, serif;
  }
  
  //Body Style
  
  body {
    margin: 0;
    padding: 0;
    
    //Nested h1 style
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }
    
    //Nested h3 style
    
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }
    
    // Nested p style
    
    p {
      font-size: 1rem;
      color: var(--white);
    }
  
  }
  
  
`
