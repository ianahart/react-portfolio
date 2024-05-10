const TextareaField = ({ name, id, label, error, value, handleUpdateField, max, placeholder, type, errorField }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleUpdateField(name, value, 'value');
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (value.trim().length === 0 || value.length > max) {
      const validationError = `${errorField} is required and must be between 1 and ${max} characters.`;
      handleUpdateField(name, validationError, 'error');
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    handleUpdateField(name, '', 'error');
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <textarea
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        name={name}
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        className="h-20 resize-none rounded bg-transparent border border-gray-700 w-full pl-1  shadow"
      ></textarea>
      {error.length > 0 && <p className="text-red-400 my-1">{error}</p>}
    </div>
  );
};

export default TextareaField;
