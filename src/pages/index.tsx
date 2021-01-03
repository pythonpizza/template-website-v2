import { Box } from "theme-ui";
import { About } from "~/sections/about";
import { Hero } from "~/sections/hero";
import { Schedule } from "~/sections/schedule";
import { Sponsors } from "~/sections/sponsors";

const Home = () => (
  <Box>
    <Hero />
    <About />
    <Schedule />
    <Sponsors />
  </Box>
);

export default Home;
