import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FindNotesPage from "./pages/FindNotesPage";
import NewNotePage from "./pages/NewNotePage";
import NotesPage from "./pages/NotesPage";
import ViewNotePage from "./pages/ViewNotePage";
import EditNotePage from "./pages/EditNotePage";
import "./App.css";

function App() {
  return (
    <main className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/new" element={<NewNotePage />} />
        <Route path="/find" element={<FindNotesPage />} />
        <Route path="/view-note/:id" element={<ViewNotePage />} />
        <Route path="/edit-note/:id" element={<EditNotePage />} />
      </Routes>
    </main>
  );
}

export default App;
