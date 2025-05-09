// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Todo from './Todo.js';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', gap: '40px' }}>
          <div>
            <h2>Todo #1</h2>
            <Todo />
          </div>

          <div>
            <h2>Todo #2</h2>
            <Todo />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
