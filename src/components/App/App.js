import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Compose from "../Compose/Compose";
import BlogPosts from "../BlogPosts/BlogPosts";
import SingleBlog from "../SingleBlog/SingleBlog";
import Error from "../Error/Error";
import About from "../About/About";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BlogPosts />} />
          <Route path="/:topicID/:topic" element={<SingleBlog />} />
          <Route exact path="/compose" element={<Compose />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
