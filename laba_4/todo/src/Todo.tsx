import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "./todoSlice";

const Todo = () => {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setText (e.target.value) ;
    };

    const handleAddTodo = () => {
        if (text) {
            dispatch (addTodo (text));
            setText ("") ;
        }
    };

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
    };
    
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };


    // return (
    //     <div>
    //       <h2>Список дел</h2>
    //       <input
    //         type="text"
    //         value={text}
    //         onChange={handleInputChange}
    //         placeholder="Введите задачу"
    //       />
    //       <button onClick={handleAddTodo}>Добавить</button>
    
    //       <ul>
    //         {todos.map((todo) => (
    //           <li key={todo.id} style={{ marginBottom: "10px" }}>
    //             <span
    //               style={{
    //                 textDecoration: todo.completed ? "line-through" : "none",
    //                 marginRight: "10px",
    //               }}
    //             >
    //               {todo.text}
    //             </span>
    //             <button onClick={() => handleToggleComplete(todo.id)}>
    //               {todo.completed ? "Сделать невыполненным" : "Отметить как выполнено"}
    //             </button>
    //             <button
    //               onClick={() => handleDeleteTodo(todo.id)}
    //               style={{ marginLeft: "10px" }}
    //             >
    //               Удалить
    //             </button>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    // );

    return (
        <div>
            <input type="text" value={text} onChange={handleInputChange} />{" "}
            <button onClick={handleAddTodo}> Add Todo </button>{" "}
            <ul>
                {" "}
                {todos.map((todo) => (
                    <li
                        key={todo. id}
                        style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                        }}
                    >
                        {todo. text} {" "}
                        <button onClick={() => handleToggleComplete(todo.id)}>
                            {" "}
                            {todo. completed ? "Mark Incomplete" : "Mark Complete" }{" "}
                        </button>{" "}
                        <button onClick={() => handleDeleteTodo(todo.id)}> Delete </button>{""}
                    </li>
                ))}{" "}
            </ul>{" "}
        </div>
    );
};

export default Todo;