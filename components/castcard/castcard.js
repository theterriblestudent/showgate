import { StyledCastCard } from "./castcard.styled";
import { no_profile_image } from 'assets';

function CastCard ({ profile_image, name, character }) {
    return(
        <StyledCastCard>
            <img src={profile_image ? `http://image.tmdb.org/t/p/w185/${profile_image}` : no_profile_image} alt="Proflie"/>
            <div>
                <h4 title={name}>{name}</h4>
                <p title={character}>{character}</p>
            </div>
        </StyledCastCard>
    );
}

export default CastCard;