// Import the necessary libraries.
import React from 'react'


// Import the styles
import { Wrapper, Content, Text } from './HeroImage.style';

// Types
type Props = {
    image: string;
    title: string;
    text: string;
}

// HeroImage Component
const HeroImage: React.FC<Props> = ({ image, title, text }) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;