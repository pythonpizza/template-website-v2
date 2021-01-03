import { Box } from "theme-ui";
import { About } from "~/sections/about";
import { Coc } from "~/sections/coc";
import { Hero } from "~/sections/hero";
import { Schedule } from "~/sections/schedule";
import { Sponsors } from "~/sections/sponsors";

const Home = () => (
  <Box>
    <Hero />
    <About />
    <Schedule />
    <Sponsors />
    <Coc />
  </Box>
);

export default Home;
