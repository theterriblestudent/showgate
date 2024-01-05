'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import useMediaCard from "./useMediaCard";
import { getReleaseDate } from "utils/date";
import { FlexContainer } from "components";
import { no_poster_image, no_backdrop_image } from "assets";
import {ReleaseDate, Genres, Title} from "./mediacard.styled";
import { Star, AddButton, RatingNumber } from "./mediacard.styled";
import {StyledMediaCard, StyledMediaInfo, MediaInfoGrid} from "./mediacard.styled";

function MediaCard({media_info}) {
    const {getGenres, releaseDateHelper, mediaType} = useMediaCard(media_info);
    const router = useRouter();

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
                <Title onClick={() => router.push(`/view/${mediaType}/${media_info.id}`)}>
                    {media_info.title || media_info.original_title || media_info.name || media_info.original_name}
                </Title>
                <MediaInfoGrid>
                    <Genres>{getGenres()}</Genres>
                    <FlexContainer gap="2px" justify_content="end">
                        <Star />
                        <RatingNumber>{Math.round(media_info.vote_average * 10) / 10}</RatingNumber>
                    </FlexContainer>
                    <ReleaseDate>{getReleaseDate(releaseDateHelper())}</ReleaseDate>
                    <AddButton />
                </MediaInfoGrid>
            </StyledMediaInfo>
        </StyledMediaCard>
    )
}

export default MediaCard;