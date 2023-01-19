import { useEffect, useState } from "react"
import appTheme from "../theme"
import AppContext from "./appContext"

const AppProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <AppContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </AppContext.Provider >
    )
}

export default AppProvider