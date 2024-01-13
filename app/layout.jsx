import StyledComponentsRegistry from "lib/StyleRegistry";
import {colors} from "styles/colors"
import GlobalStyles from "styles/globalstyles";
import {GridContainer, NavBar} from "components";
import { barlow, roboto } from "styles/fonts";

export const metadata = {
    title: "Showgate | Stream Movies and TV Shows.",
    description: ""
};

export default function RootLayout({children}) {

    return(
        <html lang="en" className={`${roboto.variable}`}>
            <body className={`${barlow.variable}`}>
                <StyledComponentsRegistry>
                    <GlobalStyles />
                    <GridContainer>
                        <NavBar />
                        {children}
                    </GridContainer>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}