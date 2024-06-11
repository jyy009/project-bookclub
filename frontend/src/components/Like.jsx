export const Like = ({ imageUrl, label, onClick, likes, time }) => {
  return (
    <div
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
      className="flex flex-row"
    >
      <button className="" type="submit" onClick={onClick}>
        <img src={imageUrl} alt="like" className="h-5 w-5 mr-2 lg:h-6 lg:w-6" />
      </button>

      <span className="md:text-lg lg:text-xl">x{likes}</span>
      {/* <p className="time">{time}</p> */}
    </div>
  );
};
