import { useEffect, useState } from "react"
import { getUser } from "../services/userServices"
import appTheme from "../theme"
import AppContext from "./appContext"

const AppProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true)
    const [user, setUser] = useState({})

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const fetchUserData = async () => {
        if (localStorage.getItem('jwt_token')) {
            const userData = await getUser()
            setUser(userData)
        }

    }

    useEffect(() => {
        fetchUserData()
    }, [])


    return (
        <AppContext.Provider value={{ darkMode, toggleDarkMode, user, fetchUserData }}>
            {children}
        </AppContext.Provider >
    )
}

export default AppProvider