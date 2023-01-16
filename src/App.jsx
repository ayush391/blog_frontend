import { ThemeProvider } from "@mui/material";
import Login from "./pages/Login";

import { HashRouter, Route, Routes } from "react-router-dom";

import './App.css'
import theme from "./theme";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/common/Navbar";




function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  )
}

export default App
