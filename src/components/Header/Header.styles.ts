// Import the necessary libraries
import styled from 'styled-components';


// Export the Wrapper component div style
export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px; 
`;

// Export the content component div style
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

// Export the logo component img style
export const LogoImg = styled.img`
  width: 200px;
  
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

// Export the Movie database logo component img style.
export const TMDBLogoImg = styled.img`
  width: 100px;
  
  @media screen and (max-width: 500px) {
    width: 80px ;
  }
`;