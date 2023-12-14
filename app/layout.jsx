import StyledComponentsRegistry from "lib/StyleRegistry";
import GlobalStyles from "styles/GlobalStyles";

export const metadata = {
    title: "Showgate | Stream Movies and TV Shows.",
    description: ""
};

export default function RootLayout({children}) {

    return(
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <GlobalStyles />
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}