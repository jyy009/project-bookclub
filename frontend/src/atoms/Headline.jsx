export const Headline = ({ section, titleText }) => {
  return (
    <h1
      className={`${section} font-josefinsans text-2xl md:text-3xl py-4 lg:py-6`}
    >
      {titleText}
    </h1>
  );
};
