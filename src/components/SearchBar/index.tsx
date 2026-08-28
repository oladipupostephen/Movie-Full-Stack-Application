// Import the necessary libraries
import React, { useState, useEffect, useRef } from 'react';

// Import search icon
import searchIcon from '../../images/search-icon.svg';

// Import the styles
import { Wrapper, Content } from './SearchBar.styles';

// Types
type Props = {
    setSearchTerm:  React.Dispatch<React.SetStateAction<string>>;
}

// Search Component
const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);
    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {setSearchTerm(state);}, 500)
        return () => clearTimeout(timer)
    }, [setSearchTerm, state])
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'/>
                <input type='text' placeholder='Search Movies' 
                onChange={event => setState(event.currentTarget.value)}
                value={state}/>
            </Content>
        </Wrapper>
    )
}


// Export the component
export default SearchBar;