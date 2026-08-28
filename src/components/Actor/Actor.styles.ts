// Import the styled component library
import styled from 'styled-components';

// Export the Wrapper styled component
export const Wrapper = styled.div`
  color: var(--white);
  background: var(--darkGrey);
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  
  h3 {
    margin: 10px 0 0 0;
  }
  
  p{
    margin: 5px 0;
  }
`;

// Export the Content styled component
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: scale-down;
  border-radius: 15px;
`;



