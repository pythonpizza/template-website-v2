import { css, Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";

import { theme } from "~/theme";

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
