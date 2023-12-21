import {StyledContentStripe} from './contentstripe.styled';
import {Title} from 'components';

function ContentStripe({endpointBuilder, cardBuilder, controlOptions, more, setDataState, dataState}) {
    return (
        <StyledContentStripe>
            <Title more dataState={dataState} controlOptions={controlOptions} setDataState={setDataState}/>
        </StyledContentStripe>
    );
}

export default ContentStripe;