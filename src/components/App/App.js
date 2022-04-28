import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";
import Contact from "../Contact/Contact";
import BlogPosts from "../BlogPosts/BlogPosts";
import SingleBlog from "../BlogPosts/SingleBlog/SingleBlog";
import Compose from "../Compose/Compose";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Logo />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blog" element={<BlogPosts />} />
          <Route path="/:topicID/:topic" element={<SingleBlog />} />
          <Route exact path="/compose" element={<Compose />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
