export const Text = ({ text, section }) => {
  return (
    <p
      className={`${section} font-worksans text-base md:text-lg lg:text-xl break-normal`}
    >
      {text}
    </p>
  );
};
