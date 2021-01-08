import { ThemeProvider } from "theme-ui";
import type { AppProps } from "next/app";
import { theme } from "~/theme";
import { Global, css } from "@emotion/react";

const App = ({ Component, pageProps }: AppProps) => (
  /* @ts-ignore */
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        html {
          font-size: 62.5%;
        }
      `}
    />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
