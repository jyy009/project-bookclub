export const Button = ({ btnText, type, onClick }) => {
  return (
    <button
      className="bg-tertiary px-12 py-2 text-secondary font-josefinsans rounded-md"
      onClick={onClick}
      type={type}
    >
      {btnText}
    </button>
  );
};
