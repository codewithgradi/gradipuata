import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Chat } from "./pages/Chat";
import { Education } from "./pages/Education";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { NotFound } from "./pages/NotFound";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/chat"} />
        <Link to={"/education"} />
        <Link to={"/experience"} />
        <Link to={"/projects"} />
        <Link to={"/notfound"} />
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
