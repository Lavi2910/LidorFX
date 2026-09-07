import { useState } from "react";

const FEATURED = [
  {
    id: "_I5JygrH1h8",
    name: "איתי",
    caption: "בזכות לידור אני סוחר רווחי לאורך זמן",
  },
  {
    id: "XCxiCXoMEWk",
    name: "אנדריי",
    caption: "בזכותו הגעתי למשיכה של 100 אלף שקל בחודש וחצי",
  },
  {
    id: "PyaffU4E5V8",
    name: "אלון",
    caption: "לידור אומר לך תכלס מה צריך לעשות - והיום ברוך השם יש תוצאות",
  },
];

const CLIPS = [
  "Aa-yj-G0J00",
  "cmcQEgByzhs",
  "--VGQpBE9Nk",
  "OwtEhYBUjPI",
  "3CGOffTHNj8",
];

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

const QuoteMark = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-gold"
  >
    <path d="M7.17 5A5.17 5.17 0 0 0 2 10.17a5.17 5.17 0 0 0 5.17 5.17c.3 0 .6-.03.88-.08-.6 1.9-2.2 3.3-4.2 3.66v1.9c3.9-.4 7-3.7 7-7.7v-2.95A5.17 5.17 0 0 0 7.17 5Zm12 0A5.17 5.17 0 0 0 14 10.17a5.17 5.17 0 0 0 5.17 5.17c.3 0 .6-.03.88-.08-.6 1.9-2.2 3.3-4.2 3.66v1.9c3.9-.4 7-3.7 7-7.7v-2.95A5.17 5.17 0 0 0 19.17 5Z" />
  </svg>
);

const VideoFacade = ({ id, big, label }) => {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={embedUrl(id)}
        title={label || "המלצה"}
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
      className="group absolute inset-0 h-full w-full"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        onError={(e) => {
          e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
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

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-brand-ink py-8 lg:py-12">
      <div className="mx-auto max-w-[1400px] px-6 md:px-16 lg:px-30">
        <div className="text-center">
          <h2 className="m-0 text-[30px] text-brand-text md:text-[42px]">
            <span className="text-brand-gold">תלמידים</span> מספרים
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {FEATURED.map((v) => (
            <figure key={v.id} className="m-0">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-brand-line bg-brand-surface">
                <VideoFacade id={v.id} big label={v.name} />
              </div>
              <figcaption className="mt-4 text-right">
                <p className="m-0 text-[19px] font-semibold text-brand-text">
                  {v.name}
                </p>
                <blockquote className="m-0 mt-1.5 flex gap-2">
                  <QuoteMark />
                  <span className="text-[15px] leading-relaxed text-brand-text-2">
                    {v.caption}
                  </span>
                </blockquote>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 border-t border-brand-line pt-10">
          <p className="text-center text-brand-text-2">
            מההודעות שאני מקבל
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {CLIPS.map((id) => (
              <div
                key={id}
                className="relative aspect-[9/16] overflow-hidden rounded-lg border border-brand-line bg-brand-surface"
              >
                <VideoFacade id={id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
