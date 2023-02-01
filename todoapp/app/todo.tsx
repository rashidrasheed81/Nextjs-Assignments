"use client";
import React, { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState("");


  const [todos, setTodos] = useState([
    
    {todoText: "todo 1", completed: false},
    // {todoText: "todo 2", completed: true},
    // {todoText: "todo 3", completed: false},
    // {todoText: "todo 4", completed: true},
  ]);

  const onClickHandler = (meraElm:any)=>{
    console.log(meraElm);
    
const newTodos = todos.map((todo)=>{
    // console.log("todo: ", todo);
    if(todo.todoText == meraElm.todoText){
        todo.completed = !todo.completed
    }
    return todo;
});
console.log(newTodos);
setTodos(newTodos)
}

const addTodo =()=>{
    const newTodo = { todoText: todo, completed: false};
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
}

const deleteTodo = (meraTodo:any)=>{
    const newTodos = todos.filter(todo =>{
        if(todo.todoText == meraTodo.todoText)
            return false;
        return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
    setTodos(newTodos);


}


  return (
    <>
      <div>todo</div>
      <input placeholder= "add todo text" value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((elm) => {
          return <li style={{color: elm.completed ? "green" : "orange", fontStyle: "oblique"}} key={elm.todoText}
          >
            <input type="checkbox" checked={elm.completed} onChange = {()=>{onClickHandler(elm)}} />
            {elm.todoText}
            <button style={{backgroundColor: "gray"}} onClick={()=>{deleteTodo(elm)}}>Delete</button>
            </li>;
        })}
        
      </ul>
    </>
  );
}
