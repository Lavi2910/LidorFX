import { useEffect, useState } from "react";

const IMAGES = Object.values(
  import.meta.glob("../../assets/method/*.{jpg,jpeg,JPG,JPEG,png,PNG}", {
    eager: true,
    import: "default",
  }),
);

const DISPLAY_MS = 10000;
const TRANSITION_MS = 2600;

export const MethodGallery = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (IMAGES.length < 2) return;

    let timeoutId;
    let isFirst = true;

    const schedule = () => {
      timeoutId = setTimeout(
        () => {
          setIndex((i) => (i + 1) % IMAGES.length);
          isFirst = false;
          schedule();
        },
        isFirst ? DISPLAY_MS : DISPLAY_MS + TRANSITION_MS,
      );
    };

    schedule();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[8px]">
      {IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="גרף מסחר של לידור"
          className="absolute inset-0 h-full w-full object-cover ease-out"
          style={{
            opacity: i === index ? 1 : 0,
            transform: i === index ? "scale(1)" : "scale(1.04)",
            transitionProperty: "opacity, transform",
            transitionDuration: `${TRANSITION_MS}ms`,
          }}
        />
      ))}
    </div>
  );
};
