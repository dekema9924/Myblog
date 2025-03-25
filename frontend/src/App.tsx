import Header from "./components/Header"
import Home from "./components/Home"
import { Routes, Route } from "react-router-dom"
import ReadBlog from "./components/ReadBlog"
import Register from "./components/pages/Register"
import Login from "./components/pages/Login"


function App() {

  return (
    <>
      <Header />
      <div className="mt-24 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<ReadBlog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
