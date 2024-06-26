import { useCallback, useState } from 'react';
import InputField from './InputField';
import TextareaField from './TextareaField';

const formState = {
  name: { name: 'name', error: '', value: '', type: 'text', max: 150 },
  email: { name: 'email', error: '', value: '', type: 'email', max: 150 },
  message: { name: 'message', error: '', value: '', type: 'text', max: 400 },
};

const Form = () => {
  const [contactForm, setContactForm] = useState(formState);

  const handleUpdateField = useCallback(
    (name, value, attribute) => {
      setContactForm((prevState) => ({
        ...prevState,
        [name]: { ...prevState[name], [attribute]: value },
      }));
    },
    [setContactForm]
  );

  const clearErrors = (form) => {
    for (const key of Object.keys(form)) {
      handleUpdateField(key, '', 'error');
    }
  };

  const validateForm = (form) => {
    let isValidated = true;

    for (const key of Object.keys(form)) {
      if (!form[key].value) {
        handleUpdateField(key, `${key} is a required field`, 'error');
        isValidated = false;
      }
    }
    return isValidated;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors(contactForm);
    if (!validateForm(contactForm)) {
      return;
    }
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit} className="md:max-w-[650px] max-w-full p-1">
      <div className="my-4">
        <InputField
          handleUpdateField={handleUpdateField}
          name={contactForm.name.name}
          value={contactForm.name.value}
          error={contactForm.name.error}
          type={contactForm.name.type}
          max={contactForm.name.max}
          label="Name"
          id="name"
          errorField="Name"
          placeholder="Enter your full name"
        />
      </div>
      <div className="my-4">
        <InputField
          handleUpdateField={handleUpdateField}
          name={contactForm.email.name}
          value={contactForm.email.value}
          error={contactForm.email.error}
          type={contactForm.email.type}
          max={contactForm.email.max}
          label="Email"
          id="email"
          errorField="Email"
          placeholder="Enter your email"
        />
      </div>
      <div className="my-4">
        <TextareaField
          handleUpdateField={handleUpdateField}
          name={contactForm.message.name}
          value={contactForm.message.value}
          error={contactForm.message.error}
          type={contactForm.message.type}
          max={contactForm.message.max}
          label="Message"
          id="message"
          errorField="Message"
          placeholder="Enter your message"
        />
      </div>
      <div className="flex justify-center">
        <button className="btn w-full" type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Form;
