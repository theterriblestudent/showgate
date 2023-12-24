import { MediaCard, Loader ,PeoplesCard} from "components";

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

export {generateMediaCards, generatePeoplesCards};