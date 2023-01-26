import Login from "./pages/Login";

import { HashRouter, Route, Routes } from "react-router-dom";

// import './App.css'
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/common/Navbar";
import BlogPage from "./components/blog/BlogPage";
import AddBlog from "./pages/AddBlog";
import { useContext, useState } from "react";
import AppContext from "./context/appContext";
import appTheme from "./theme";
import { useMemo } from "react";
import Signup from "./pages/Signup";
import EditBlog from "./pages/EditBlog";


function App() {

  const context = useContext(AppContext)
  const { darkMode } = context

  const currTheme = useMemo(() => {
    return createTheme(
      {
        ...appTheme,
        palette: {
          ...appTheme.palette,
          mode: darkMode ? 'dark' : 'light'
        }
      }
    )
  }, [darkMode])

  return (
    <>
      <ThemeProvider theme={currTheme}>
        <CssBaseline enableColorScheme />
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/blog/:blogId" element={<BlogPage />}></Route>
            <Route path="/addblog" element={<AddBlog />}></Route>
            <Route path="/editblog/:blogId" element={<EditBlog />}></Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  )
}

export default App
