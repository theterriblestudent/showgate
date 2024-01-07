import {Title} from 'components';
import useContentStripe from './useContentStripe';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import {StyledContentStripe, ScrollableContainer} from './contentstripe.styled';


function ContentStripe({data, contentStripeRef, urlBuilder, getContentCards, controlOptions, more, setDataState, dataState, small}) {
    const {contentData, inView, handleChevronClick, mergedRef, scrollableContainer} = useContentStripe(urlBuilder, data);
    return (
        <StyledContentStripe small={small} ref={contentStripeRef}>
            <Title more={more} dataState={dataState} scrollableContainer={scrollableContainer}
                   controlOptions={controlOptions} setDataState={setDataState}/>
            
            <FaChevronCircleLeft onClick={() => handleChevronClick("LEFT")}
                                 className="chevron left-chevron" />

            <FaChevronCircleRight onClick={handleChevronClick}
                                  className="chevron right-chevron" />

            <ScrollableContainer small={small} ref={mergedRef}>
                {inView ? getContentCards(contentData ? contentData.results || contentData.cast : []) : null}
            </ScrollableContainer>
        </StyledContentStripe>
    );
}

export default ContentStripe;