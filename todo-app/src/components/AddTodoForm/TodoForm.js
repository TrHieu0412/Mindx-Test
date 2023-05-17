import { useState } from "react";
import "./TodoForm.css"
const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const onChangeHandler = (e) => setTitle(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(title !== "") {
      props.onAddNewTodo(title);
    }
    setTitle("");
  };
  return (
    <div className="todo-form">
      <form onSubmit={onSubmitHandler}>
        <input
          name="title"
          value={title}
          onChange={onChangeHandler}
          placeholder="add details "
        />
        <button type="submit" className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
