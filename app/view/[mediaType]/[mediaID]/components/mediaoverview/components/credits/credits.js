import {StyledCredits} from './credits.styled';
import useCredits from './useCredits';

function Credits({value_key, values}) {
    const {getValues} = useCredits();

    return (
        <StyledCredits>
            <h4>{`${value_key}: `}</h4>
            <p>{getValues(values)}</p>
        </StyledCredits>
    );
}

export default Credits;