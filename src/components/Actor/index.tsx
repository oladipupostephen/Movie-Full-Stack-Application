// Import the necessary libraries
import React from "react";
import { Wrapper, Image } from "./Actor.styles";

// Type
type Props = {
  name: string;
  character: string;
  imageUrl: string;
};

// Import the style component.

// Create the Actor Component
const Actor: React.FC<Props> = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

// Export the component
export default Actor;
