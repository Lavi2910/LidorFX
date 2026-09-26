import { useState } from "react";

const embedUrl = (id) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

const PlayIcon = ({ big }) => (
  <span
    className={`flex items-center justify-center rounded-full bg-brand-gold/95 text-brand-ink shadow-lg transition-transform group-hover:scale-110 ${
      big ? "h-16 w-16" : "h-11 w-11"
    }`}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className={big ? "h-7 w-7 ms-1" : "h-5 w-5 ms-0.5"}>
      <path d="M8 5v14l11-7z" />
    </svg>
  </span>
);

export const VideoFacade = ({ id, big, label }) => {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={embedUrl(id)}
        title={label || "סרטון"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`נגן ${label || "סרטון"}`}
      className="group absolute inset-0 h-full w-full focus-visible:outline focus-visible:outline-[3px] focus-visible:-outline-offset-[3px] focus-visible:outline-brand-gold"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        onError={(e) => {
          const fallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
          if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
        }}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-brand-ink/35 transition-colors group-hover:bg-brand-ink/20" />
      <span className="absolute inset-0 flex items-center justify-center">
        <PlayIcon big={big} />
      </span>
    </button>
  );
};
