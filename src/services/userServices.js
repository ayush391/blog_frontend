import axios from "axios"

const baseURL = import.meta.env.VITE_BASE_URL

export const createUser = async (user) => {
    const url = baseURL + '/user/signup'
    const config = { validateStatus: () => true, }
    const response = await axios.post(url, user, config)
    console.log(response)
    if (response.status === 200) {
        localStorage.setItem('jwt_token', response.data)
    }
    return response
}
export const loginUser = async (user) => {
    const url = baseURL + '/user/login'
    const config = { validateStatus: () => true, }
    const response = await axios.post(url, user, config)
    if (response.status === 200) {
        localStorage.setItem('jwt_token', response.data.token)
    }
    return response
}

export const logoutUser = async () => {
    localStorage.removeItem('jwt_token')
}
export const getUser = async () => {
    const url = baseURL + '/user/getuser'
    const config = {
        headers: {
            'auth-token': localStorage.getItem('jwt_token')
        }
    }
    const response = await axios.get(url, config)
    if (response.status === 200) {
        return response
    }
}

