export const TextInput = ({
  inputType,
  inputName,
  placeholder,
  label,
  value,
  onChange,
}) => {
  return (
    <>
      <label>
        {label}
        <input
          type={inputType}
          placeholder={placeholder}
          name={inputName}
          required
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};
