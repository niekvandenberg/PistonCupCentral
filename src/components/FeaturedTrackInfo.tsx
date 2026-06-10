import QRCode from "react-qr-code";
import type { Track } from "../types/Track";
import { useEffect, useState } from "react";

type FeaturedTrackInfoProps = {
  track: Track;
  progress: number;
};

export function FeaturedTrackInfo({ track, progress }: FeaturedTrackInfoProps) {
  const [visible, setVisible] = useState(true);
  const [displayedTrack, setDisplayedTrack] = useState(track);

  useEffect(() => {
    setVisible(false);
    const swapTimer = setTimeout(() => {
      setDisplayedTrack(track);
      setVisible(true);
    }, 300);
    return () => clearTimeout(swapTimer);
  }, [track]);

  return (
    <div
      className={`relative w-full h-105 sm:h-130 md:h-150 lg:h-5/6 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={displayedTrack.image}
        alt={`Image of ${displayedTrack.title}`}
        className="w-full h-full object-cover rounded-2xl lg:rounded-3xl transition-all duration-500"
      />

      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 lg:right-auto lg:w-[90%] xl:w-2/3 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 bg-gray-100/50 text-white border-l-4 lg:border-l-8 border-2 border-primary backdrop-blur-md">
        <div className="flex items-start justify-between gap-4 border-b border-white/20 pb-4 sm:pb-5">
          <div className="flex flex-col gap-2 sm:gap-3 min-w-0">
            <h2 className="text-sm sm:text-base lg:text-xl font-display font-black bg-primary px-2 py-1 sm:p-3 rounded-lg sm:rounded-xl w-fit whitespace-nowrap">
              Featured Circuit
            </h2>
            <p className="text-lg sm:text-2xl lg:text-4xl font-display opacity-90 leading-tight truncate">
              {displayedTrack.title}
            </p>
          </div>

          <div className="xs:flex sm:flex flex-col items-center bg-white p-2 sm:p-3 rounded-xl shrink-0 transition-transform duration-200 hover:scale-105">
            <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
              <QRCode
                size={96}
                style={{ height: "100%", width: "100%" }}
                value={displayedTrack.url}
              />
            </div>
            <p className="text-gray-950 mt-1 text-[10px] sm:text-xs">
              Scan track
            </p>
          </div>
        </div>

        <div className="text-white flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-0 pt-4 sm:pt-5">
          <div className="transition-all duration-200 hover:scale-105">
            <h3 className="text-xs sm:text-sm opacity-70 uppercase tracking-wide">
              Track length
            </h3>
            <p className="text-sm sm:text-base font-semibold mt-0.5">
              {displayedTrack.length} km
            </p>
          </div>
          <div className="transition-all duration-200 hover:scale-105">
            <h3 className="text-xs sm:text-sm opacity-70 uppercase tracking-wide">
              Surface
            </h3>
            <p className="text-sm sm:text-base font-semibold mt-0.5">
              {displayedTrack.surface}
            </p>
          </div>
          <div className="transition-all duration-200 hover:scale-105">
            <h3 className="text-xs sm:text-sm opacity-70 uppercase tracking-wide">
              Difficulty
            </h3>
            <p className="text-sm sm:text-base font-semibold mt-0.5 ">
              {displayedTrack.difficulty}
            </p>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 h-1 w-full bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
