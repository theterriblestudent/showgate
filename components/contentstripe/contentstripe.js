import {Title} from 'components';
import useContentStripe from './useContentStripe';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import {StyledContentStripe, ScrollableContainer} from './contentstripe.styled';


function ContentStripe({urlBuilder, getContentCards, controlOptions, more, setDataState, dataState}) {
    const {data, scrollableContainer, handleChevronClick} = useContentStripe(urlBuilder)
    return (
        <StyledContentStripe>
            <Title more={more} dataState={dataState} controlOptions={controlOptions} setDataState={setDataState}/>
            
            <FaChevronCircleLeft onClick={() => handleChevronClick("LEFT")}
                                 className="chevron left-chevron" />

            <FaChevronCircleRight onClick={handleChevronClick}
                                  className="chevron right-chevron" />

            <ScrollableContainer ref={scrollableContainer}>
                {getContentCards(data ? data.results : [])}
            </ScrollableContainer>
        </StyledContentStripe>
    );
}

export default ContentStripe;