import axios from "axios"

const baseURL = import.meta.env.VITE_BASE_URL

export const postBlog = async (blog) => {
    const url = baseURL + '/blog' + '/create'
    const config = {
        headers: {
            'auth-token': localStorage.getItem('jwt_token')
        }
    }
    console.log(blog)
    const response = await axios.post(url, blog, config)
    console.log(response)
}

export const getBlog = async (blogId) => {
    const url = baseURL + '/blog' + '/blogId' + `/${blogId}`
    const response = await axios.get(url)
    console.log(response)
    return response.data[0]
}

