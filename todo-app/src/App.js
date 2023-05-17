import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/AddTodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Active from "./pages/Active";
import Completed from "./pages/Completed";
import Alltext from "./pages/Alltext";
import Header from "./header/Header";
function App() {
  const [todoList, setTodoList] = useState([]);
  // const [input, setInput ]
  const onAddNewTodo = (todoTitle) => {
    const newTodo = {
      title: todoTitle,
      id: uuidv4(),
    };
    const nextTodoList = [...todoList, newTodo];
    setTodoList(nextTodoList);
    localStorage.setItem("todoList", JSON.stringify(nextTodoList))
  };
  const onDeleteList = (todoId) => {
    const deleteList=todoList.filter(item=> {return item.id!== todoId;});
    setTodoList(deleteList)

  }
  const onDeleteAll = (todoId) =>{
    const deleteList=todoList.filter(item => {return item.id===undefined});
    setTodoList(deleteList)
  }
  const onItemChecked = (itemId) => {
    const itemIndex = todoList.findIndex(({ id }) => id === itemId);
    const newTodo = [...todoList];
    const newTodoItem = {
      ...newTodo[itemIndex],
      isDone: !newTodo[itemIndex].isDone,
    };
    newTodo[itemIndex] = newTodoItem;
    setTodoList(newTodo);
    localStorage.setItem("todoList", JSON.stringify(newTodo))
  };
  return (

    <div className="container todo-app">
      <div className="title"><h1>#todo</h1></div>
      <div className="todo-page">
        <Header />
        <Routes>
          <Route path="/All" element={<Alltext />} />
          <Route path="/Active" element={<Active />}/>
          <Route path="/Completed" element={<Completed />}/>
        </Routes>
      </div>
      <TodoForm onAddNewTodo={onAddNewTodo} />
      <TodoList todos={todoList}  onDeleteList={onDeleteList} onItemChecked={onItemChecked} onDeleteAll={onDeleteAll}/>
    </div>
  );
  
}

export default App;
