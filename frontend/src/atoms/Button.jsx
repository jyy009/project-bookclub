export const Button = ({ btnText, type, onClick, buttonStyle }) => {
  return (
    <button onClick={onClick} type={type} className={buttonStyle}>
      {btnText}
    </button>
  );
};
