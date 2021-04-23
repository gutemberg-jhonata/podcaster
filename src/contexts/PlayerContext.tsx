import { createContext, useState } from "react";

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodes: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
};

export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerProvider({ children }) {
  const [episodes, setEpisodes] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode: Episode) {
    setEpisodes([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  return (
    <PlayerContext.Provider
      value={{ episodes, currentEpisodeIndex, isPlaying, play }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
