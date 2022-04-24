import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Compose from "../Compose/Compose";
import BlogPosts from "../BlogPosts/BlogPosts";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogPosts />} />
          <Route path="/:topic" element={<SingleBlog />} />
          <Route path="/compose" element={<Compose />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
