import { usestate } from "react";
import { EpisodeList } from "./data";
import EpisodeListItem from "./EpisodeListItem";


export default function EpisodeList({ selectedEpisode, setSelectedEpisode }) {
    const [episodes] = useState(episodeList);

    return (
        <section className="episodes">
          <h2>Episodes</h2>
          <ol>
            {episodes.map((episode) => (
              <EpisodeListItem
                key={episode.id}
                episode={episode}
                setSelectedEpisode={setSelectedEpisode}
                selectedEpisode={selectedEpisode}
              />
            ))}
          </ol>
        </section>
      );
    }