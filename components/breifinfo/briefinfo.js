import {StyledBriefInfo, StyledRating, StyledReleaseYear} from './briefinfo.styled';
import {StyledSeperator, StyledRuntime, StyledPG, StyledStar} from './briefinfo.styled';

function BriefInfo({rating, releaseYear, runtime, PG, small}) {
    return (
        <StyledBriefInfo small={small}>
                <StyledRating small={small}>
                    <StyledStar small={small} />
                    <h4>{Math.round(rating * 10) / 10}</h4>
                </StyledRating>
            <StyledSeperator />
            <StyledRuntime small={small}>{runtime}</StyledRuntime>
            <StyledSeperator />
            <StyledReleaseYear small={small}>{releaseYear}</StyledReleaseYear>
            <StyledSeperator />
            <StyledPG small={small}>{PG}</StyledPG>
        </StyledBriefInfo>
    );
};

export default BriefInfo;