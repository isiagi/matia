import Hero from "./components/hero/Hero";
import Priest from "./components/priest/Priest";
import Schedule from "./components/schedule/Schedule";
import Sermon from "./components/sermon/Sermon";
import Verse from "./components/verse/Verse";

export default function Home() {
  return (
    <div>
      <Hero />
      <Schedule />
      <Sermon />
      <Priest />
      <Verse />
    </div>
  );
}
