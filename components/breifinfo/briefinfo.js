import {StyledBriefInfo, StyledRating, StyledReleaseYear} from './briefinfo.styled';
import {StyledSeperator, StyledRuntime, StyledPG} from './briefinfo.styled';
import { FaStar } from 'react-icons/fa';
import { colors } from 'styles/colors';

function BriefInfo({rating, releaseYear, runtime, PG}) {
    return (
        <StyledBriefInfo>
                <StyledRating>
                    <FaStar size="1.8rem" color={colors.accent} />
                    <h4>{Math.round(rating * 10) / 10}</h4>
                </StyledRating>
            <StyledSeperator />
            <StyledRuntime>{runtime}</StyledRuntime>
            <StyledSeperator />
            <StyledReleaseYear>{releaseYear}</StyledReleaseYear>
            <StyledSeperator />
            <StyledPG>{PG}</StyledPG>
        </StyledBriefInfo>
    );
};

export default BriefInfo;