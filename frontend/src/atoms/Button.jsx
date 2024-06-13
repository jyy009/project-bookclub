export const Button = ({ btnText, type, onClick, width, disabled }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-tertiary text-white font-josefinsans rounded-md md:text-lg px-4 ${width ? width : "w-32"} py-1`}
      disabled={disabled}>
      {btnText}
    </button>
  );
};

//
