
// import { createSlice } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//     name: "todos",
//     initialState: [],
//     reducers: {
        
//         addTodo: (state, action) => {
//             const newTodo = {
//                 id: Date.now(),
//                 text: action.payload,
//                 completed: false,
//             };
//             state.push(newTodo);
//         },
        
//         toggleComplete: (state, action) => {
//             const todo = state. find((todo) => todo.id === action.payload);
//             if (todo) {
//                 todo.completed = !todo.completed;
//             }
//         },

//         deleteTodo: (state, action) => {
//             const index = state. findIndex((todo) => todo. id === action.payload);
//             if (index !== -1) {
//                 state.splice(index, 1);
//             }
//         },
//     },
// });

// export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
// export default todoSlice.reducer;



import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: number;
    text: string;
    deadline: string;
    completed: boolean;
    completedAt: string | null;
}

const todoSlice = createSlice({
    name: "todos",
    initialState: [] as Todo[],
    reducers: {
        addTodo: (state, action: PayloadAction<{ text: string; deadline: string }>) => {
            const { text, deadline } = action.payload;
            const newTodo: Todo = {
                id: Date.now(),
                text,
                deadline,
                completed: false,
                completedAt: null,
            };
            state.push(newTodo);
        },

        toggleComplete: (state, action: PayloadAction<number>) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? new Date().toISOString() : null;
            }
        },

        deleteTodo: (state, action: PayloadAction<number>) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
