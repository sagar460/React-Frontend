import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditPage from "./pages/EditPage";
import CreatePage from "./pages/CreatePage";
import SinglePage from "./pages/SinglePage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit-page/:id" element={<EditPage />} />
        <Route path="/create-page" element={<CreatePage />} />
        <Route path="/single-page/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
