export const Button = ({
  btnText,
  type,
  onClick,
  width,
  disabled,
  backgroundColor,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${
        backgroundColor ? backgroundColor : "bg-tertiary"
      } text-white font-josefinsans rounded-md flex justify-center md:text-lg px-4 pt-2 ${
        width ? width : "w-32 md:w-36"
      } py-1
      hover:bg-seventh
      transition-colors duration-300 ease-in-out
      `}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};
