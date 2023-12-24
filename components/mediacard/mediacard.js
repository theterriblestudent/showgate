'use client';
import Image from "next/image";
import useMediaCard from "./useMediaCard";
import { getReleaseDate } from "utils/date";
import { no_poster_image, no_backdrop_image } from "assets";
import {ReleaseDate, Genres, Title} from "./mediacard.styled";
import {StyledMediaCard, StyledMediaInfo} from "./mediacard.styled";

function MediaCard({media_info}) {
    const {getGenres, releaseDateHelper} = useMediaCard(media_info);

    return (
        <StyledMediaCard>
            <picture>
                <source media="(min-width: 968px)"
                        srcSet={media_info.backdrop_path ?
                            `https://image.tmdb.org/t/p/w780${media_info.backdrop_path}` : no_backdrop_image}/>
                <source media="(max-width: 968px)"
                        srcSet={media_info.poster_path ? 
                            `https://image.tmdb.org/t/p/w342${media_info.poster_path}` : no_poster_image}/>
                <Image alt="Media Image" />
            </picture>
            <StyledMediaInfo>
                <Title>{media_info.title || media_info.original_title || media_info.name || media_info.original_name}</Title>
                <Genres>{getGenres()}</Genres>
                <ReleaseDate>{getReleaseDate(releaseDateHelper())}</ReleaseDate>
            </StyledMediaInfo>
        </StyledMediaCard>
    )
}

export default MediaCard;