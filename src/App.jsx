import Login from "./pages/Login";

import { HashRouter, Route, Routes } from "react-router-dom";

import './App.css'
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/common/Navbar";
import BlogPage from "./components/blog/BlogPage";
import AddBlog from "./pages/AddBlog";


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/blog" element={<BlogPage />}></Route>
            <Route path="/addblog" element={<AddBlog />}></Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  )
}

export default App
