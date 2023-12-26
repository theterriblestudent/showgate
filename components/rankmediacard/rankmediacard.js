import React from 'react';
import { no_poster } from 'assets';
import { StyledBoxOfficeCard } from './rankmediacard.styled';
import { StyledPositionNumber } from './rankmediacard.styled';


function RankCard({poster_path, index}) {
  return (
      <StyledBoxOfficeCard>
          <img src={(poster_path ? `https://image.tmdb.org/t/p/w342${poster_path}` : no_poster)} />
          <StyledPositionNumber>
            <h1>{index + 1}</h1>
          </StyledPositionNumber>
      </StyledBoxOfficeCard>
  );
}

export default RankCard;