import React, { useState } from "react";
import "./TodoList.css";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit, MdOutlineSave } from "react-icons/md";

const initialItems = [
  "Javascript",
  "HTML",
  "CSS",
  "Typescript",
  "Unit Testing",
  "Git",
  "NodeJS",
  "ReactJS",
  "Redux",
].map((item) => ({
  id: `${item}-${Date.now()}`,
  text: item,
  isEditing: false,
  completed: false,
}));

const TodoList = () => {
  const [todoItems, setTodoItems] = useState(initialItems);
  const [currentTodo, setCurrentTodo] = useState("");
  const [filter, setFilter] = useState("All");

  const addTodoItem = (value) => {
    setTodoItems((items) => [
      ...items,
      {
        id: `${value}-${Date.now()}`,
        text: value,
        isEditing: false,
        completed: false,
      },
    ]);
  };

  const handleSubmit = (e) => {
    // prevents default reload of the page with constructed query string
    e.preventDefault();
    if (currentTodo) {
      addTodoItem(currentTodo);
    }
    setCurrentTodo("");
  };

  const handleChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  const handleEdit = (todoId) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === todoId ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };

  const handleUpdate = (todo, e) => {
    const newItem = e.target.value;
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === todo.id ? { ...item, text: newItem } : item
      )
    );
  };

  const handleDelete = (todoId) => {
    // React guarantees that the prevItems argument will always contain the most up-to-date state value, avoiding stale state issues.
    setTodoItems((prevItems) => prevItems?.filter((item) => item.id != todoId));
    //Potential Issues:If multiple state updates are triggered in quick succession (e.g., rapid deletions), this line could use an outdated version of todoItems because React batches state updates and might not have applied the latest changes yet.
    //setTodoItems(todoItems?.filter((item) => item.id != todoId));
  };

  const filteredTodos = () => {
    if (filter === "Active") {
      return todoItems.filter((item) => !item.completed);
    } else if (filter === "Completed") {
      return todoItems.filter((item) => item.completed);
    }

    return todoItems;
  };

  const handleToggle = (todoId) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === todoId.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="container">
      <form id="todo-form" onSubmit={handleSubmit}>
        <input
          name="todo"
          id="todo-input"
          type="text"
          autoComplete="off"
          placeholder="Add a new todo..."
          value={currentTodo}
          onChange={handleChange}
        />
      </form>
      <ul className="list-container" id="listContainer">
        {filteredTodos().map((item) => (
          <li key={item.id}>
            {item.isEditing ? (
              <input
                key={item.id}
                type="text"
                value={item.text}
                onChange={(e) => handleUpdate(item, e)}
              />
            ) : (
              <span
                onClick={() => handleToggle(item)}
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {item.text}
              </span>
            )}
            {/* React automatically binds the event object to the function, making e available as the first argument. */}

            <button onClick={() => handleEdit(item.id)}>
              {item.isEditing ? <MdOutlineSave /> : <MdOutlineEdit />}
            </button>
            {/* If your handler expects anything other than the event object, you need to explicitly pass it using an arrow function or a similar approach. */}
            <button onClick={() => handleDelete(item.id)}>
              <AiFillDelete />
            </button>
          </li>
        ))}
      </ul>
      {todoItems.length === 0 && (
        <div className="no-item">Oops! There are no todos to display.</div>
      )}
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Active")}>Active</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
      </div>
    </div>
  );
};

export default TodoList;
