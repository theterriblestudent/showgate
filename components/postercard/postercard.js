import React from 'react';
import usePosterCard from './usePosterCard';
import { StyledPosterCard } from './postercard.styled';

function PosterCard({ image, releaseDate, media_id, media_type }) {

    const { handleClick } = usePosterCard(media_type);

    return(
        <StyledPosterCard onClick={ () => handleClick(media_id)}>
            <img src={image} alt="Poster" />
            <p>{releaseDate}</p>
        </StyledPosterCard>
    );
}

export default PosterCard;