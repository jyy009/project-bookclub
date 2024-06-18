export const Button = ({
  btnText,
  type,
  onClick,
  width,
  disabled,
  btnStyle,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${
        btnStyle
          ? btnStyle
          : "bg-tertiary hover:bg-seventh transition-colors duration-300 ease-in-out pt-2"
      } text-white font-josefinsans rounded-md flex justify-center md:text-lg px-4 ${
        width ? width : "w-32 md:w-36"
      } py-1`}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};
