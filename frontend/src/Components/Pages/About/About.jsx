import AboutHero      from "./AboutHero";
import AboutMission   from "./AboutMission";
import AboutStory     from "./AboutStory";
import AboutTeam      from "./AboutTeam";
import AboutTechStack from "./AboutTechStack";
import AboutCTA       from "./AboutCTA";
import WhyNovaMart    from "./WhyNovaMart";
import "./About.css";

export default function About() {
  return (
    <div className="ab-wrapper">
      <AboutHero />
      <WhyNovaMart />
      <AboutMission />
      <AboutStory />
      <AboutTeam />
      <AboutTechStack />
      <AboutCTA />
    </div>
  );
}
