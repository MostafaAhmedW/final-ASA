import React from "react";
import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";
import HomeWhy from "./HomeWhy";
import HomeSectors from "./HomeSectors";
import HomeNumber from "./HomeNumber";
import HomePartners from "./HomePartners";
import HomeCta from "./HomeCta";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeWhy />
      <HomeSectors />
      <HomeNumber />
      <HomePartners />
      <HomeCta />
    </>
  );
}
