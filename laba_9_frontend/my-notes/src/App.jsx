

// import React, { useEffect, useState } from "react";
// import "./App.css";
// import CreateNoteForm from "./components/ui/CreateNoteForm";
// import Note from "./components/ui/Note";
// import Filter from "./components/ui/Filter";
// import { fetchNotes, createNote } from "./services/notes";  // Добавлен импорт

// function App() {
//   const [notes, setNotes] = useState([]);
//   const [filter, setFilter] = useState({
//     search: "",
//     sortItem: "date",
//     sortOrder: "desc",
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       let notes = await fetchNotes(filter);
//       setNotes(notes || []);  // Защита от undefined
//     };

//     fetchData();
//   }, [filter]);

//   const onCreate = async (note) => {
//     await createNote(note);
//     let notes = await fetchNotes(filter);
//     setNotes(notes || []);
//   };

//   return (
//     <section className="p-8 flex flex-row justify-start items-start gap-12">
//       <div className="flex flex-col w-1/3 gap-10">
//         <CreateNoteForm onCreate={onCreate}/>
//         <Filter filter={filter} setFilter={setFilter} />
//       </div>

//       <ul className="flex flex-col gap-5 w-1/2">
//         {Array.isArray(notes) && notes.length > 0 ? (
//           notes.map((n) => (
//             <li key={n.id}>
//               <Note
//                 title={n.title}
//                 description={n.description}  // Исправлено
//                 createdAt={n.createdAt}
//               />
//             </li>
//           ))
//         ) : (
//           <p>No notes available</p>
//         )}
//       </ul>
//     </section>
//   );
// }

// export default App;


















import React, { useEffect, useState } from "react";
import "./App.css";
import CreateNoteForm from "./components/ui/CreateNoteForm";
import Note from "./components/ui/Note";
import Filter from "./components/ui/Filter";
import { fetchNotes, createNote } from "./services/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    sortItem: "date",
    sortOrder: "desc",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchNotes(filter);
      setNotes(result || []);
    };

    fetchData();
  }, [filter]);

  const onCreate = async (note) => {
    await createNote(note);
    const updatedNotes = await fetchNotes(filter);
    setNotes(updatedNotes || []);
  };

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-5xl font-bold text-center mb-10">Создание заметки</h1>

      <div className="mb-10">
        <CreateNoteForm onCreate={onCreate} />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <div className="w-full md:w-2/3">
          <Filter filter={filter} setFilter={setFilter} />
        </div>
      </div>

      <ul className="flex flex-col gap-5">
        {Array.isArray(notes) && notes.length > 0 ? (
          notes.map((note) => (
            <li key={note.id}>
              <Note
                title={note.title}
                description={note.description}
                createdAt={note.createdAt}
              />
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">Нет доступных заметок</p>
        )}
      </ul>
    </main>
  );
}

export default App;

