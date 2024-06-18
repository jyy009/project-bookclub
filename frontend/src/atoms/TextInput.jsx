export const TextInput = ({
  inputType,
  inputName,
  placeholder,
  label,
  value,
  onChange,
  backgroundColor,
  rows,
  requiredPattern,
}) => {
  return (
    <>
      <label
        className={`font-josefinsans text-base md:text-lg flex flex-col my-2`}
      >
        {label}
        <input
          type={inputType}
          placeholder={placeholder}
          name={inputName}
          required
          pattern={requiredPattern}
          value={value}
          onChange={onChange}
          className={`font-worksans text-sm border-2 rounded-lg p-2 placeholder-gray-500 ${backgroundColor}`}
          rows={rows}
        ></input>
      </label>
    </>
  );
};
