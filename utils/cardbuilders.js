import {v4 as uuid} from "uuid";
import { MediaCard, Loader } from "components";
import { PeoplesCard, RankCard, CastCard, PosterCard, CreditsCard} from "components"
import { getReleaseDate } from "./date";

function generateMediaCards(data) {
    if (data.length === 0) return <Loader />
    return (
        data.map(media => {
            return <MediaCard key={uuid()} media_info={media} />
        })
    );
}

function generatePeoplesCards(data) {
    if (data.length === 0) return <Loader />
    return (
        data.map(person => {
            return <PeoplesCard key={uuid()} name={person.name}
                                id={person.id}
                                profile_image_path={person.profile_path}
                   />
        })
    )
}

function generateRankCards(data) {
    if (data.length === 0) return <Loader />
    return data.map((media, index) => {
        return <RankCard key={uuid()} poster_path={media.poster_path} index={index} />
    });
}

function generateCastCards(data) {
    if (data.length === 0) return <Loader />
    return data.map(cast => {
        return <CastCard key={uuid()} profile_image={cast.profile_path}
                         name={cast.name || cast.original_name}
                         character={cast.character || "N/A"} />
    });
}

function generatePosterCards(data) {
    if (data.length === 0) return <Loader />;
    return (
        data.map(media => {
            return (
                <PosterCard key={uuid()}
                image={ media.poster_path ? `http://image.tmdb.org/t/p/w342${media.poster_path}` : "/assets/images/poster-not-found.png" }
                releaseDate={getReleaseDate(media.release_date || media.first_air_date)}
                media_id={media.id}
                media_type={media.release_date ? "movie" : "tv"} />
            );
        })
    );
}

function generateCreditsCards(data) {
    if (data.length === 0) return <Loader />

    return (
        data.map((credit, index) => {
            return (
                <CreditsCard key={uuid()} credit_title={credit.name || credit.orignal_name}
                             department={credit.department || credit.known_for_department}
                             role={credit.job}
                             index={index}/>
            )
        })
    )
}

function generateEpisodeCards(data, getEpisodeRatings) {

    if (data.length === 0) return <Loader />

    return (
        data.map((credit, index) => {
            return (
                <CreditsCard key={uuid()} credit_title={`${credit.episode_number}. ${credit.name} `}
                             department={getReleaseDate(credit.air_date)}
                             role={getEpisodeRatings(credit.vote_average)}
                             index={index}
                             episode/>
            )
        })
    )
}

export {generateMediaCards, generatePeoplesCards, generateRankCards, generateCastCards, generatePosterCards, generateCreditsCards, generateEpisodeCards};