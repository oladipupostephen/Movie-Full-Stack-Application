// Import the necessary libraries
import React, {Component} from 'react';
import { Link } from 'react-router-dom';


// Import images.
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// Import the styled component
import {Wrapper, Content, LogoImg, TMDBLogoImg} from "./Header.styles";


// Header Component

const Header: React.FC = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
        </Content>
    </Wrapper>
);

// Export the Header Component
export default Header;