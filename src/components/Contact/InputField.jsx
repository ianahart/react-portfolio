import { validateEmail } from '../../util';

const InputField = ({ name, id, label, error, value, handleUpdateField, max, placeholder, type, errorField }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleUpdateField(name, value, 'value');
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (value.trim().length === 0 || value.length > max) {
      const validationError = `${errorField} is required and must be between 1 and ${max} characters.`;
      handleUpdateField(name, validationError, 'error');
      return;
    }

    if (name === 'email' && type === 'email' && !validateEmail(value)) {
      handleUpdateField(name, 'Provided email address is invalid.', 'error');
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    handleUpdateField(name, '', 'error');
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        name={name}
        value={value}
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-9 rounded bg-transparent border border-gray-700 w-full pl-1  shadow"
      />
      {error.length > 0 && <p className="text-red-400 my-1">{error}</p>}
    </div>
  );
};

export default InputField;
