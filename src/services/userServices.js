import axios from "axios"

const baseURL = import.meta.env.VITE_BASE_URL

export const loginUser = async (user) => {
    const url = baseURL + '/user/login'
    const response = await axios.post(url, user)
    console.log(response)
    if (response.status === 200) {
        localStorage.setItem('jwt_token', response.data)
        return true
    }
    return false
}

