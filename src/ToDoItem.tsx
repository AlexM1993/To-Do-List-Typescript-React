interface ToDoItemProps {
  todo: {
    id: number;
    text: string;
  };
  remove: (id: number) => void;
}

function ToDoItem({ todo, remove }: ToDoItemProps) {
  const removeToDo = () => {
    remove(todo.id);
  };
  return (
    <li>
      {todo.text}
      <button onClick={removeToDo}>Delete</button>
    </li>
  );
}

export default ToDoItem;
