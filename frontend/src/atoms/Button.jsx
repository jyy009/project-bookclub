export const Button = ({ btnText, type, onClick, buttonStyle, disabled }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={buttonStyle}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};
