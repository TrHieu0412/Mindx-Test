import React, {useEffect} from "react";
import "./TodoList.css";
import { FaCheck, FaRegTrashAlt }  from "react-icons/fa";

const TodoList = (props) => {
  const { todos, onDeleteList,onDeleteAll, onItemChecked} = props;

 useEffect(() => {

 }, [])
  return (
    <div>
      {todos &&
        todos.map((todoItem, index) => {
          return (
            <div className="todo-all">
                <div className="todo-list-main" key={todoItem.id}>
                <div className="flex items-center h-5">
                  <input
                  type="checkbox"
                  className="border-gray-200 rounded-full accent-green-400 h-4 w-4"
                  onClick={() => onItemChecked(todoItem.id)}
                  />
                 </div>
              <p className={`mb-0 me-4 todo-list ${todoItem.isDone  ? "done" : ""}`}>{todoItem.title}</p>
            </div>
            <div className="btn">
              <button className="delete-btn" onClick={()=>{onDeleteList(todoItem.id)}}>
              <FaRegTrashAlt/>
              </button>
               </div> 
            </div>
          );
        })}
        
              <div className="deleteall-btn">
           {todos.length > 0 && <button className="delete-btn" onClick={()=>{onDeleteAll()}}>
            <FaRegTrashAlt/> Delete all
            </button>
}
            </div>
    </div>
    
  );
  
};

export default TodoList;
