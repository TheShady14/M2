import Slide from "./components/Slide";
import DataVisualization from "./components/DataVisualization";
import MediaSquaredHero from "./components/MediaSquaredHero";
import MallPresenceLanding from "./components/MallPresenceLanding";
import CampaignManagementLanding from "./components/CampaignManagementLanding";
import MediaSquaredPillars from "./components/MediaSquaredPillars";
import MediaSquaredOverview from "./components/MediaSquaredOverview";

export default function Home() {
  return (
    <main>
      {/* Slide 1: Welcome */}
      <Slide id="slide1" backgroundImage="/Assets/Welcome.svg">
        <MediaSquaredHero />
      </Slide>

      {/* Slide 2: Mall Presence (Small Biz) */}
      <Slide id="slide2" bg="white">
        <MallPresenceLanding />
      </Slide>

      {/* Slide 3: Data Visualisation */}
      <Slide id="slide3" backgroundImage="/Assets/Welcome.svg">
        <DataVisualization />
      </Slide>

      {/* Slide 4: Campaign Management */}
      <Slide id="slide4" bg="white">
        <CampaignManagementLanding />
      </Slide>

      {/* Slide 5: MediaSquared Pillars */}
      <Slide id="slide5" bg="gradient-to-br from-purple-100 to-white">
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
          <MediaSquaredPillars />
        </div>
      </Slide>

      {/* Slide 6: Blank with background image */}
      <Slide id="slide6" backgroundImage="/Assets/Welcome.svg">
        <div className="w-full max-w-7xl mx-auto px-4 py-16 text-white">
          <MediaSquaredOverview />
        </div>
      </Slide>
    </main>
  );
}
