// Import the necessary tools and libraries
import React from 'react';

// Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";

// Import the components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb'
import Spinner from './Spinner'
import SearchBar from './SearchBar';
import Button from './Button'

// Import Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';

// Import Images
import NoImage from '../images/no_image.jpg'

// Home component
const Home: React.FC = () => {

    const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } = useHomeFetch();

    // Error Message.
    if (error) return <div>Something went wrong ...</div>

    return (
        <>
            { !searchTerm && state.results[0] ?
                <HeroImage
                 image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                 title={state.results[0].original_title}
                 text={state.results[0].overview}/>
                : null
            }

            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
                {state.results.map(movie => (

                    <Thumb key={movie.id} clickable  image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE +
                        movie.poster_path : NoImage} movieId={movie.id}/>
                     ))}
            </Grid>
            {loading && <Spinner/>}
            {  state.page < state.total_pages && !loading &&
            (<Button text='Load More' callback={() => setIsLoadingMore(true)}/>) }
        </>

    )
}

export default Home;