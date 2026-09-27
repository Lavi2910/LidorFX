import { VideoFacade } from "./Components/VideoFacade";

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
  {
    id: "CWC-jrannyQ",
    name: "בר",
    caption: "עונה לי הכי מהר שאפשר כאילו אני התלמיד הראשון שלו",
  },
];

const CLIPS = [
  "Aa-yj-G0J00",
  "cmcQEgByzhs",
  "--VGQpBE9Nk",
  "OwtEhYBUjPI",
  "3CGOffTHNj8",
  "fIPlC-fbxA0",
  "08hYUAE-D48",
  "cn0RE_e1HVk",
  "PjKRQqslXWY",
];

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

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-brand-ink py-8 lg:py-12">
      <div className="mx-auto max-w-[1400px] px-6 md:px-16 lg:px-30">
        <div className="text-center">
          <h2 className="m-0 text-[30px] text-brand-text md:text-[42px]">
            <span className="text-brand-gold">תלמידים</span> מספרים
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
