import { ResultsCarousel } from "./ResultsCarousel";

const studentResults = Object.values(
  import.meta.glob("../assets/StudentsResult/*.{jpg,jpeg,JPG,JPEG,png,PNG}", {
    eager: true,
    import: "default",
  }),
);

export const Results = () => {
  return (
    <div id="results" className="py-20 bg-brand-ink overflow-hidden">
      <h2 className="text-[40px] text-brand-text">
        <span className="text-brand-gold">תוצאות</span> של תלמידים
      </h2>
      <ResultsCarousel images={studentResults} altPrefix="תוצאה של תלמיד" />
    </div>
  );
};
