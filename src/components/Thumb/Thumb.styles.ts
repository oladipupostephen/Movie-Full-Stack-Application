// Import the style-component library
import styled from 'styled-components';

// Export the image style

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 1s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;
  
  :hover {
    opacity: 0.8;
  }
  
  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    
    to {
      opacity: 1;
    }
  }
`;