export const Like = ({ imageUrl, label, onClick, likes, time }) => {
  return (
    <div
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
      className="flex flex-row"
    >
      <button className="" type="submit" onClick={onClick}>
        <img src={imageUrl} alt="like" className="inline-block h-5 w-5 mr-2" />
      </button>

      <span>x{likes}</span>
      {/* <p className="time">{time}</p> */}
    </div>
  );
};
