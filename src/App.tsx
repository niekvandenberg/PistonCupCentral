import "./App.css";
import { FeaturedTrackInfo } from "./components/FeaturedTrackInfo";
import { Header } from "./components/Header";
import { MoreTracks } from "./components/MoreTracks";
import { MockTracks } from "../src/data/mock";
import { useState, useEffect, useRef } from "react";

const INTERVAL = 10000;

function App() {
  const [tracks, setTracks] = useState(MockTracks);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number>(Date.now());
  const rafRef = useRef<number>(0);

  const featuredTrack = tracks[featuredIndex];

  const goToNext = (currentTracks = tracks) => {
    const reordered = [...currentTracks.slice(1), currentTracks[0]];
    setTracks(reordered);
    setFeaturedIndex(0);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  useEffect(() => {
    startTimeRef.current = Date.now();
    setProgress(0);

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / INTERVAL) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        goToNext();
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tracks]);

  const handleChangeTrack = (track: (typeof tracks)[0]) => {
    const index = tracks.indexOf(track);
    const reordered = [
      tracks[index],
      ...tracks.slice(0, index),
      ...tracks.slice(index + 1),
    ];
    setTracks(reordered);
    setFeaturedIndex(0);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden w-full font-sans pl-10 pr-10 pt-10 flex flex-col">
      <Header />
      <div className="flex flex-col lg:flex-row justify-between gap-5 pt-10 flex-1 lg:min-h-0">
        <div className="animate-fade-in-up w-full lg:min-h-0 lg:overflow-hidden">
          <FeaturedTrackInfo track={featuredTrack} progress={progress} />
        </div>

        <div className="animate-slide-in-right lg:min-h-0 lg:overflow-y-auto">
          <MoreTracks
            tracks={tracks.slice(1)}
            changeTrack={handleChangeTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
