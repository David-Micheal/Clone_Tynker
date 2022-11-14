import React from "react";
import HeroComp from "./Comps/HeroComp";
import WorldCup from "./Comps/WorldCup";
import Explore from "./Comps/Explore";
import Parents from "./Comps/Parents";
import Educators from "./Comps/Educators";
import Rated from "./Comps/Rated";
import Mobile from "./Comps/Mobile";
import Facts from "./Comps/Facts";
import Benefits from "./Comps/Benefits";
import Trust from "./Comps/Trust";

const Body: React.FC = () => {
  return (
    <div>
      <HeroComp />
      <WorldCup />
      <Explore />
      <Parents />
      <Educators />
      <Rated />
      <Mobile />
      <Facts />
      <Benefits />
      <Trust />
    </div>
  );
};

export default Body;
