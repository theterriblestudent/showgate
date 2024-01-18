'use client'

import React from 'react'
import { StyledPeoplesCard } from './peoplecard.styled'

function PeoplesCard({name, profile_image_path}) {
  return (
    <StyledPeoplesCard>
        <img src={profile_image_path ? `https://image.tmdb.org/t/p/w185${profile_image_path}`: "/assets/images/pp-not-found.png"} alt={`${name}'s profile`} />
        <p>{name}</p>
    </StyledPeoplesCard>
  )
}

export default PeoplesCard