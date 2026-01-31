import InfraCta from "./InfraCta";
import InfraGoals from "./InfraGoals";
import InfraHero from "./InfraHero";
import InfraImpact from "./InfraImpact";
import InfraImplementation from "./InfraImplementation";
import InfraIntro from "./InfraIntro";
import InfraNumber from "./InfraNumber";
import InfraProject from "./InfraProject";

export default function Infrastructure() {
  return (
    <>
      <InfraHero />
      <InfraIntro />
      <InfraGoals />
      <InfraNumber />
      <InfraProject />
      <InfraImpact />
      <InfraImplementation />
      <InfraCta />
    </>
  );
}
