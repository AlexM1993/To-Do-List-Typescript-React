import { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
import Card from "./Card";

const getInitialData = () => {
  const dataString = localStorage.getItem("todos");
  const data = dataString !== null ? JSON.parse(dataString) : null;
  if (!data) return [];
  return data;
};

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function ToDoList() {
  const [todos, setTodos] = useState<Todo[]>(getInitialData);

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { text, id: Math.random(), completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };

  return (
    <>
      <Card>
        <h1> Hi there,</h1>
      </Card>
      <div>
        <Card>
          <h2>Here is your list:</h2>

          <ul>
            {todos.map((todo) => (
              <ToDoItem key={todo.id} todo={todo} remove={removeTodo} />
            ))}
          </ul>
          <ToDoForm addTodo={addTodo as (text: string) => string & number[]} />
        </Card>
      </div>
    </>
  );
}

export default ToDoList;
