import type { Track } from "../types/Track";

interface TrackInfoRowProps {
  track: Track;
  changeTrack: (track: Track) => void;
}

export function TrackInfoRow({ track, changeTrack }: TrackInfoRowProps) {
  return (
    <div
      className="flex flex-row cursor-pointer group transition-all duration-300 hover:bg-gray-100 rounded-2xl p-2 hover:shadow-md"
      onClick={() => changeTrack(track)}
    >
      <div className="overflow-hidden rounded-2xl shrink-0">
        <img
          src={track.image}
          alt={`image of ${track.title}`}
          className="w-28 h-28 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="pl-4 flex flex-col justify-center">
        <h2 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors duration-200">
          {track.title}
        </h2>
        <p className="text-base font-semibold pt-1 text-gray-600">
          {track.length}km
        </p>
        <p className="text-base font-semibold text-primary pt-2 flex items-center gap-1 transition-all duration-200 group-hover:gap-2">
          View stats{" "}
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </div>
  );
}
