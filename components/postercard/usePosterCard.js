'use client'; 

import { useRouter } from 'next/navigation';

function usePosterCard({media_type}) {
    
    const router = useRouter();

    function handleClick(media_id) {
        router.push(`/view/${media_type}/${media_id}`);
    }

  return {handleClick};
}

export default usePosterCard;