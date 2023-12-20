import React from "react";
import { ShowcaseSection, TrendingSection } from "app/components";

export default function HomePage() {
    return (
        <React.Fragment>
            <ShowcaseSection/>
            <TrendingSection />
        </React.Fragment>
    );
}