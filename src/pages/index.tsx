import { About } from "~/sections/about";
import { Hero } from "~/sections/hero";
import { Schedule } from "~/sections/schedule";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Schedule />
    </div>
  );
};

export default Home;
