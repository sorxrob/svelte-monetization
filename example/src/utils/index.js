import watermark from "watermarkjs";

export const addWatermark = async (imageUrl) => {
  const text = watermark.text.center(
    "I'm a watermark",
    "38px serif",
    "#fff",
    0.5,
  );
  const options = {
    init(img) {
      img.crossOrigin = "anonymous";
    },
  };
  const img = await watermark([imageUrl], options).image(text);
  return img.src;
};
