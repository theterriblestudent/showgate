'use client'

import React from 'react'
import {no_profile_image} from 'assets';
import { StyledPeoplesCard } from './peoplecard.styled'

function PeoplesCard({name, profile_image_path}) {
  return (
    <StyledPeoplesCard>
        <img src={profile_image_path ? `https://image.tmdb.org/t/p/w185${profile_image_path}`: no_profile_image} alt={`${name}'s profile`} />
        <p>{name}</p>
    </StyledPeoplesCard>
  )
}

export default PeoplesCard