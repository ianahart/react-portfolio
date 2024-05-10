const formState = {
  name: { name: 'name', error: '', value: '', type: 'text', max: 150 },
  email: { name: 'email', error: '', value: '', type: 'email', max: 150 },
  message: { name: 'message', error: '', value: '', type: 'text', max: 400 },
};

const Form = () => {
  return (
    <form className="border md:max-w-[650px] max-w-full">
      <input className="w-full" />
    </form>
  );
};

export default Form;
