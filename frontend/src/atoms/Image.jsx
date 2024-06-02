export const Image = ({ section, link, imgText }) => {
  return <img src={link} alt={imgText} className={`${section}`} />;
};
