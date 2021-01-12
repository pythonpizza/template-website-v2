import Head from "next/head";
import { Box } from "theme-ui";

import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { genericInformation } from "~/data/generic";
import { About } from "~/sections/about";
import { Coc } from "~/sections/coc";
import { Hero } from "~/sections/hero";
import { Schedule } from "~/sections/schedule";
import { Sponsors } from "~/sections/sponsors";

const Home = () => (
  <Box>
    <Head>
      <title>{genericInformation.pageTitle}</title>
      <meta property="og:title" content={genericInformation.pageTitle} />
      <meta
        property="og:description"
        content={genericInformation.socialDescription}
      />
      <meta name="twitter:site" content="@pythonpizzaconf" />
      <meta property="og:image" content="/social-image.jpg" />
      <meta name="twitter:image:alt" content="Conference logo" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>

    <Header />
    <Hero />
    <About />
    <Schedule />
    <Sponsors />
    <Coc />
    <Footer />
  </Box>
);

export default Home;
