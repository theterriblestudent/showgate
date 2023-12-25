import {Title} from 'components';
import useContentStripe from './useContentStripe';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import {StyledContentStripe, ScrollableContainer} from './contentstripe.styled';


function ContentStripe({contentStripeRef, urlBuilder, getContentCards, controlOptions, more, setDataState, dataState}) {
    const {data, inView, handleChevronClick, mergedRef} = useContentStripe(urlBuilder)
    return (
        <StyledContentStripe ref={contentStripeRef}>
            <Title more={more} dataState={dataState} controlOptions={controlOptions} setDataState={setDataState}/>
            
            <FaChevronCircleLeft onClick={() => handleChevronClick("LEFT")}
                                 className="chevron left-chevron" />

            <FaChevronCircleRight onClick={handleChevronClick}
                                  className="chevron right-chevron" />

            <ScrollableContainer ref={mergedRef}>
                {inView ? getContentCards(data ? data.results : []) : null}
            </ScrollableContainer>
        </StyledContentStripe>
    );
}

export default ContentStripe;