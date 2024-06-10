export const TextInput = ({ inputType, inputName, placeholder, label, value, onChange, labelStyle, inputStyle, rows }) => {
  const InputElement = inputType === "textarea"? "textarea" : "input";

  return (
    <>
      <label className={labelStyle}>
        {label}
        <InputElement
          type={inputType}
          placeholder={placeholder}
          name={inputName}
          required
          value={value}
          onChange={onChange}
          className={inputStyle}
          rows={inputType === "textarea"? rows : undefined}        
          />
      </label>
    </>
  );
};
