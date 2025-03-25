export default function EpisodeListItem({
  episode,
  selectedEpisode,
  setSelectedEpisode,
}) {
  return (
    <li
      key={episode.id}
      onClick={() => setSelectedEpisode(episode)}
      className={selectedEpisode?.id === episode.id ? "selected" : ""}
    >
      {episode.title}
    </li>
  );
}