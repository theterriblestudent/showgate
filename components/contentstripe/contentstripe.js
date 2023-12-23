import {Title} from 'components';
import useContentStripe from './useContentStripe';
import {StyledContentStripe, ScrollableContainer} from './contentstripe.styled';


function ContentStripe({urlBuilder, getContentCards, controlOptions, more, setDataState, dataState}) {
    const data = useContentStripe(urlBuilder)
    return (
        <StyledContentStripe>
            <Title more={more} dataState={dataState} controlOptions={controlOptions} setDataState={setDataState}/>
            <ScrollableContainer>
                {getContentCards(data ? data.results : [])}
            </ScrollableContainer>
        </StyledContentStripe>
    );
}

export default ContentStripe;