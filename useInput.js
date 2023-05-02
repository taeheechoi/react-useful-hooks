import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
  };
};

// Example
const MyForm = () => {
  const nameInput = useInput("");
  const emailInput = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(nameInput);
    console.log(emailInput.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...nameInput} />
      <input type="email" {...emailInput} />
      <button type="submit">Submit</button>
    </form>
  );
};
