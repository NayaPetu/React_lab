import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "./todoSlice";

const Todo = () => {
    const [text, setText] = useState("");
    const [deadline, setDeadline] = useState("");
    const [filter, setFilter] = useState("all");

    const todos = useSelector((state: any) => state.todos);
    const dispatch = useDispatch();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeadline(e.target.value);
    };

    const handleAddTodo = () => {
        if (text && deadline) {
            dispatch(addTodo({ text, deadline }));
            setText("");
            setDeadline("");
        }
    };

    const handleToggleComplete = (id: number) => {
        dispatch(toggleComplete(id));
    };

    const handleDeleteTodo = (id: number) => {
        dispatch(deleteTodo(id));
    };

    const getDeadlineColor = (deadline: string) => {
        const now = new Date();
        const due = new Date(deadline);
        const diff = due.getTime() - now.getTime();

        if (diff < 0) return "red";
        else if (diff <= 24 * 60 * 60 * 1000) return "gold";
        else return "green";
    };

    const filteredTodos = todos.filter((todo: any) => {
        if (filter === "completed") return todo.completed;
        if (filter === "active") return !todo.completed;
        return true;
    });

    const groupTodosByDate = (todos: any[]) => {
        const today: any[] = [];
        const tomorrow: any[] = [];
        const later: any[] = [];

        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const tomorrowStart = new Date(todayStart);
        tomorrowStart.setDate(todayStart.getDate() + 1);
        const dayAfterTomorrowStart = new Date(todayStart);
        dayAfterTomorrowStart.setDate(todayStart.getDate() + 2);

        todos.forEach((todo) => {
            const dueDate = new Date(todo.deadline);
            if (dueDate >= todayStart && dueDate < tomorrowStart) {
                today.push(todo);
            } else if (dueDate >= tomorrowStart && dueDate < dayAfterTomorrowStart) {
                tomorrow.push(todo);
            } else {
                later.push(todo);
            }
        });

        return { today, tomorrow, later };
    };

    const groupedTodos = groupTodosByDate(filteredTodos);

    const renderTodoItem = (todo: any) => (
        <li key={todo.id}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
            />
            <span style={{ marginLeft: "8px", textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.text}
            </span>

            {!todo.completed && (
                <span style={{ color: getDeadlineColor(todo.deadline), marginLeft: "10px" }}>
                    (до {new Date(todo.deadline).toLocaleString()})
                </span>
            )}

            {todo.completed && todo.completedAt && (
                <span style={{ color: "gray", marginLeft: "10px" }}>
                    (завершено: {new Date(todo.completedAt).toLocaleString()})
                </span>
            )}

            <button onClick={() => handleDeleteTodo(todo.id)} style={{ marginLeft: "10px" }}>
                Удалить
            </button>
        </li>
    );

    return (
        <div>
            <h2>Todo List</h2>

            <div>
                <input
                    type="text"
                    placeholder="Enter todo"
                    value={text}
                    onChange={handleInputChange}
                />
                <input
                    type="datetime-local"
                    value={deadline}
                    onChange={handleDeadlineChange}
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>

            <div>
                <button onClick={() => setFilter("all")}>Все</button>
                <button onClick={() => setFilter("active")}>Активные</button>
                <button onClick={() => setFilter("completed")}>Завершённые</button>
            </div>

            <h3>Сегодня</h3>
            <ul>
                {groupedTodos.today.map(renderTodoItem)}
            </ul>

            <h3>Завтра</h3>
            <ul>
                {groupedTodos.tomorrow.map(renderTodoItem)}
            </ul>

            <h3>Позже</h3>
            <ul>
                {groupedTodos.later.map(renderTodoItem)}
            </ul>
        </div>
    );
};

export default Todo;

