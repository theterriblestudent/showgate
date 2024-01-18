import { StyledCastCard } from "./castcard.styled";
import { no_profile_picture } from 'assets';

function CastCard ({ profile_image, name, character }) {
    return(
        <StyledCastCard>
            <img src={profile_image ? `http://image.tmdb.org/t/p/w185/${profile_image}` : "/assets/images/pp-not-found.png"} alt="Proflie"/>
            <div>
                <h4 title={name}>{name}</h4>
                <p title={character}>{character}</p>
            </div>
        </StyledCastCard>
    );
}

export default CastCard;