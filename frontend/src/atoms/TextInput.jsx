export const TextInput = ({ inputType, inputName, placeholder, label, value, onChange, labelStyle, inputStyle }) => {
  return (
    <>
      <label className={labelStyle}>
        {label}
        <input
          type={inputType}
          placeholder={placeholder}
          name={inputName}
          required
          value={value}
          onChange={onChange}
          className={inputStyle}
        />
      </label>
    </>
  );
};
