import { type NextPage } from "next";

import Hero from "./Hero";
import Features from "./Features";
import Kontakt from "./Kontakt";

const Home: NextPage = () => {
  return (
    <>



        <main>
          <Hero />
          <Features />
          <Kontakt />
        </main>
    </>
  );
};

export default Home;
