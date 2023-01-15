import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./pages/Login";

import { HashRouter, Route, Routes } from "react-router-dom";

import './App.css'
import Dashboard from "./pages/Dashboard";


const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <HashRouter>
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
