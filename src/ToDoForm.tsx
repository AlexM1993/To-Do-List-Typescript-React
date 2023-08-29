import React, { useState } from "react";

interface ToDoFormProps {
  addTodo: (text: string) => string & number[];
}



function ToDoForm({ addTodo }: ToDoFormProps) {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text !== "") {
      const newTodos = addTodo(text);

      console.log("New todos:", newTodos);
      setText("");
    } else {
      alert("Cannot be empty");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ToDoForm;
