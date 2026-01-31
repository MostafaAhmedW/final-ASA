import React from "react";
import HealthHero from "./HealthHero";
import HealthIntro from "./HealthIntro";
import HealthGoals from "./HealthGoals";
import HealthNumber from "./HealthNumber";
import HealthProject from "./HealthProject";
import HealthImpact from "./HealthImpact";
import HealthImplement from "./HealthImplement";
import HealthCta from "./HealthCta";

export default function Health() {
  return (
    <>
      <HealthHero />
      <HealthIntro />
      <HealthGoals />
      <HealthNumber />
      <HealthProject />
      <HealthImpact />
      <HealthImplement />
      <HealthCta />
    </>
  );
}
