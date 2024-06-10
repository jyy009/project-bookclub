export const Like = ({ imageUrl, label, onClick, likes, time }) => {
  return (
    <div
      className="heart-container"
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      <div className="heart-likes">

        <button className="heart-button" type="submit" onClick={onClick}>

        <img src={imageUrl} alt="like" className="inline-block h-5 w-5 mr-2" />
          
        </button>

        <span>x{likes}</span>
      </div>
      <p className="time">{time}</p>
    </div>
  );
};
