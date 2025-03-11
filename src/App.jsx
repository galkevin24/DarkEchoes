import { useState } from "react";
import EpisodeList from "./EpisodeList";
import EpisodeDetails from "./EpisodeDetails";


export default function App() {
  const [selectedEpisode, setSelectedEpisode] = useState();

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList
          setSelectedEpisode={setSelectedEpisode}
          selectedEpisode={selectedEpisode}
        />
        <EpisodeDetails selectedEpisode={selectedEpisode} />
      </main>
    </>
  );
}
