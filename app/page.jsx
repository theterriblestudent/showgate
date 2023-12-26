import React from "react";
import {NowShowingSection, PopularPeopleSection} from "app/components"
import { JoinSection, PopularSection, ShowcaseSection } from "app/components";
import { TrendingSection, UpcomingSection, TopRatedSection } from "app/components";

export default function HomePage() {
    return (
        <React.Fragment>
            <ShowcaseSection/>
            <PopularSection />
            <UpcomingSection />
            <NowShowingSection />
            <TrendingSection />
            <TopRatedSection />
            <PopularPeopleSection />
            <JoinSection />
        </React.Fragment>
    );
}