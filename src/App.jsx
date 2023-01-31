import Login from "./pages/Login";

import { HashRouter, Route, Routes } from "react-router-dom";

// import './App.css'
import { Button, createTheme, CssBaseline, Snackbar, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/common/Navbar";
import BlogPage from "./components/blog/BlogPage";
import AddBlog from "./pages/AddBlog";
import { useContext, useEffect } from "react";
import AppContext from "./context/appContext";
import appTheme from "./theme";
import { useMemo } from "react";
import Signup from "./pages/Signup";
import EditBlog from "./pages/EditBlog";
import UserBlogs from "./pages/UserBlogs";
import Content from "./components/common/Content";
import EditUser from "./pages/EditUser";
import Footer from "./components/common/Footer";


function App() {

  const context = useContext(AppContext)
  const { snackbarOpts, handleSnackbarOpen, handleSnackbarClose, darkMode } = context


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
          <Content>
            <Routes>
              <Route path="" element={<Dashboard />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/blog/:blogId" element={<BlogPage />}></Route>
              <Route path="/addblog" element={<AddBlog />}></Route>
              <Route path="/editblog/:blogId" element={<EditBlog />}></Route>
              <Route path="/user/:userId" element={<UserBlogs />}></Route>
              <Route path="/user/edituser" element={<EditUser />}></Route>
            </Routes>
            <Snackbar
              open={snackbarOpts.open}
              message={snackbarOpts.message}
              autoHideDuration={3000}
              onClose={handleSnackbarClose}
            />
          </Content>
          <Footer />
        </HashRouter>
      </ThemeProvider>
    </>
  )
}

export default App
