"use client";
import TimelineBar from "./TimelineBar";
import styles from "./AudioPlayer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { useAudioPlayer } from "./AudioPlayerContext";

export default function AudioPlayer({
  src,
  trackId,
}: {
  src?: string | null;
  trackId: string;
}) {
  const { isPlaying, currentTrackId, playTrack, progress, handleScrub } =
    useAudioPlayer();

  if (!src) {
    return <div className={styles["audio-player"]}>No preview available</div>;
  }

  const isActive = currentTrackId === trackId && isPlaying;

  return (
    <div className={styles["audio-player"]}>
      <button
        className={styles.toggleButton}
        onClick={() => playTrack(trackId, src)}
        title={isActive ? "Pause" : "Play"}
      >
        <FontAwesomeIcon icon={isActive ? faCirclePause : faPlay} />
      </button>
      <TimelineBar
        progress={currentTrackId === trackId ? progress : 0}
        handleScrub={(pos) => {
          if (currentTrackId !== trackId) playTrack(trackId, src);
          handleScrub(pos);
        }}
      />
    </div>
  );
}
