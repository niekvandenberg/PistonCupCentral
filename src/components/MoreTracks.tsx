import { useEffect, useRef, useState } from "react";
import type { Track } from "../types/Track";
import { TrackInfoRow } from "./TrackInfoRow";

interface MoreTracksProps {
  tracks: Track[];
  changeTrack: (track: Track) => void;
}

export function MoreTracks({ tracks, changeTrack }: MoreTracksProps) {
  const prevTitlesRef = useRef<string[]>([]);
  const [animKeys, setAnimKeys] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    const prev = prevTitlesRef.current;
    const newAnimKeys = new Map<string, number>(animKeys);
    let changed = false;

    tracks.forEach((track) => {
      if (!prev.includes(track.title)) {
        newAnimKeys.set(track.title, (newAnimKeys.get(track.title) ?? 0) + 1);
        changed = true;
      }
    });

    if (changed) setAnimKeys(newAnimKeys);
    prevTitlesRef.current = tracks.map((t) => t.title);
  }, [tracks]);

  return (
    <div className="h-full">
      <h1 className="font-semibold text-3xl pb-5">More tracks</h1>
      <div className="overflow-y-auto max-h-full space-y-5 pb-45">
        {tracks.map((track, index) => {
          const animKey = animKeys.get(track.title) ?? 0;
          const isLast = index === tracks.length - 1;
          return (
            <div
              key={`${track.title}-${animKey}`}
              className={isLast && animKey > 0 ? "animate-slide-in-bottom" : ""}
            >
              <TrackInfoRow
                track={track}
                changeTrack={() => changeTrack(track)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
