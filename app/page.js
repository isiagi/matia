import Hero from "./components/hero/Hero";
import Mission from "./components/mission/Mission";
import Priest from "./components/priest/Priest";
import Schedule from "./components/schedule/Schedule";
import Sermon from "./components/sermon/Sermon";
import Verse from "./components/verse/Verse";

export default function Home() {
  return (
    <div>
      <Hero />
      <Schedule />
      <Mission />
      <Sermon />
      <Priest />
      <Verse />
    </div>
  );
}
