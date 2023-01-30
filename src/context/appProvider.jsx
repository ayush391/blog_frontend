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
            if (userData.status === 200) {
                setUser(userData.data.user)
            }

        }

    }

    useEffect(() => {
        fetchUserData()
    }, [])

    useEffect(() => {
        if (user.id) {
            handleSnackbarOpen("Welcome back " + user.id)
        }
    }, [user])

    //snackbar
    const [snackbarOpts, setSnackbarOpts] = useState({ open: false, message: 'Changes Saved' })

    const handleSnackbarOpen = (message) => {
        setSnackbarOpts({ open: true, message })
    }
    const handleSnackbarClose = () => {
        setSnackbarOpts({ ...snackbarOpts, open: false })
    }

    return (
        <AppContext.Provider value={{
            darkMode, toggleDarkMode, user, setUser, fetchUserData, snackbarOpts, setSnackbarOpts, handleSnackbarOpen
            , handleSnackbarClose,
        }}>
            {children}
        </AppContext.Provider >
    )
}

export default AppProvider