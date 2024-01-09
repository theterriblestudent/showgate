'use client';

import React from 'react';
import { MediaOverview, CastSection, RelatedMedia, CrewSection } from './components';
import useMediaInfo from './useMediaInfo';

export default function MediaInfo({params}) {
  
    const { credits, mediaInfo } = useMediaInfo(params); 

  return (
    <React.Fragment>
        <MediaOverview media_info={mediaInfo} credits={credits} media_type={params.mediaType} media_id={params.mediaID} />
        <CastSection credits={credits} />
        <CrewSection credits={credits} />
        <RelatedMedia media_type={params.mediaType} media_id={params.mediaID} />
    </React.Fragment>
  )
};

