// Import the necessary library
import React from 'react';
import { Link } from 'react-router-dom';
// Import styles
import { Image } from './Thumb.styles';

// Types
type Props = {
     image: string;
     movieId?: number;
     clickable: boolean;
}

const Thumb: React.FC<Props> = ({ image, movieId, clickable}) => (
    <div>
         {/*If clickable.*/}
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb'/>
            </Link>
        ) : (<Image src={image} alt='movie-thumb'/>)}
     </div>
);

// Validating prop types.


export default Thumb;