import "./App.css";
import Header from "./components/Header";
import NoteListPage from "./pages/NoteListPage";
import { Routes, Route } from "react-router-dom";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<NoteListPage />} />
          <Route path="note/:id" element={<NotePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
