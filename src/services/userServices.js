import axios from "axios"

const baseURL = import.meta.env.VITE_BASE_URL

export const loginUser = async (user) => {
    const url = baseURL + '/user/login'
    const response = await axios.post(url, user)
    console.log(response)
    localStorage.setItem('jwt_token', response.data)
}

