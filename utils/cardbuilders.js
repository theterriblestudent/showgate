import { MediaCard, Loader ,PeoplesCard, RankCard, CastCard, PosterCard, CreditsCard} from "components";
import { getReleaseDate } from "./date";

function generateMediaCards(data) {
    if (data.length === 0) return <Loader />
    return (
        data.map(media => {
            return <MediaCard media_info={media} />
        })
    );
}

function generatePeoplesCards(data) {
    if (data.length === 0) return <Loader />
    return (
        data.map(person => {
            return <PeoplesCard name={person.name}
                                id={person.id}
                                profile_image_path={person.profile_path}
                   />
        })
    )
}

function generateRankCards(data) {
    if (data.length === 0) return <Loader />
    return data.map((media, index) => {
        return <RankCard poster_path={media.poster_path} index={index} />
    });
}

function generateCastCards(data) {
    if (data.length === 0) return <Loader />
    return data.map(cast => {
        return <CastCard profile_image={cast.profile_path}
                         name={cast.name || cast.original_name}
                         character={cast.character} />
    });
}

function generatePosterCards(data) {
    if (data.length === 0) return <Loader />;
    return (
        data.map(media => {
            return (
                <PosterCard image={ `http://image.tmdb.org/t/p/w342${media.poster_path}` }
                releaseDate={getReleaseDate(media.release_date || media.first_air_date)}
                media_id={media.id}
                media_type={media.release_date ? "movie" : "tv"} />
            );
        })
    );
}

function generateCreditsCards(data, creditType) {
    if (data.length === 0) return <Loader />

    return (
        data.map((credit, index) => {
            return (
                <CreditsCard credit_title={credit.name || credit.orignal_name}
                             department={credit.department || credit.known_for_department}
                             role={credit.job}
                             index={index}/>
            )
        })
    )
}

export {generateMediaCards, generatePeoplesCards, generateRankCards, generateCastCards, generatePosterCards, generateCreditsCards};