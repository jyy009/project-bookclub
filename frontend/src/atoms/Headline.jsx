export const Headline = ({ section, titleText }) => {
  return (
    <h1 className={`${section} font-josefinsans text-xl lg:text-2xl py-4 lg:py-6`}>
      {titleText}
    </h1>
  );
};
