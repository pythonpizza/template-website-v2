import { Box } from "theme-ui";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { About } from "~/sections/about";
import { Coc } from "~/sections/coc";
import { Hero } from "~/sections/hero";
import { Schedule } from "~/sections/schedule";
import { Sponsors } from "~/sections/sponsors";

const Home = () => (
  <Box>
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
