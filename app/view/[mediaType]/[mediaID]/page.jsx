'use client';

import React from 'react';
import { MediaOverview } from './components';
import useMediaInfo from './useMediaInfo';

export default function MediaInfo({params}) {
    const { credits } = useMediaInfo(params); 
  return (
    <React.Fragment>
        <MediaOverview credits={credits} media_type={params.mediaType} media_id={params.mediaID} />
    </React.Fragment>
  )
};

