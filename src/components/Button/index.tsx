// Import the necessary libraries.
import React from 'react';

// Import styles.
import { Wrapper } from './Button.styles';

// Types
type Props = {
    text: string;
    callback: () => void;
}

// Button component.
const Button: React.FC<Props> = ({ text, callback }) => (
    <Wrapper type='button' onClick={callback}>
        {text}
    </Wrapper>
)

export default Button;

