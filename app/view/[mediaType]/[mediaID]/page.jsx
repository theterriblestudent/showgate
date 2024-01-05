'use client';

import React from 'react';
import { MediaOverview } from './components';
import useMediaInfo from './useMediaInfo';

export default function MediaInfo({params}) {
    const { credits } = useMediaInfo(params); 
  return (
    <React.Fragment>
        <MediaOverview />
    </React.Fragment>
  )
};

