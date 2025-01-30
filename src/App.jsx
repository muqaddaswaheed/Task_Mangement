import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import HomePage from "./Pages/Home";
import AddTask from "./Pages/AddTask";
import EditTask from "./Pages/EditTask";
import ErrorPage from "./Pages/Error";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
