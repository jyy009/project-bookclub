export const TextInput = ({ inputType, inputName, placeholder, label, value, onChange, backgroundColor, rows }) => {
  const InputElement = inputType === "textarea" ? "textarea" : "input";

  return (
    <>
      <label className={`font-josefinsans text-base md:text-lg flex flex-col my-2`}>
        {label}
        <InputElement
          type={inputType}
          placeholder={placeholder}
          name={inputName}
          required
          value={value}
          onChange={onChange}
          className={`font-worksans text-sm border-2 rounded-lg p-2 placeholder-gray-500 ${backgroundColor}`}
          rows={inputType === "textarea" ? rows : undefined}
        />
      </label>
    </>
  );
};
