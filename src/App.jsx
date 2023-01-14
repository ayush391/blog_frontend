import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./pages/Login";
import './App.css'


const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Login></Login>
      </ThemeProvider>
    </>
  )
}

export default App
