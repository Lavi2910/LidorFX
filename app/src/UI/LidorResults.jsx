import { ResultsCarousel } from "./ResultsCarousel";

const lidorResults = Object.values(
  import.meta.glob("../assets/LidorResults/*.{jpg,jpeg,JPG,JPEG,png,PNG}", {
    eager: true,
    import: "default",
  }),
);

export const LidorResults = () => {
  return (
    <div className="py-20 bg-brand-ink overflow-hidden">
      <h2 className="text-[40px] text-brand-text">
        <span className="text-brand-gold">תוצאות</span> שלי
      </h2>
      <ResultsCarousel images={lidorResults} altPrefix="תוצאה של לידור" />
    </div>
  );
};
