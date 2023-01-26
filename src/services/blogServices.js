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
}

export const updateBlog = async (blogId, blog) => {
    const url = baseURL + '/blog' + '/edit/' + blogId
    const config = {
        headers: {
            'auth-token': localStorage.getItem('jwt_token')
        }
    }
    const response = await axios.post(url, blog, config)
    return response.status
}

export const getBlog = async (blogId) => {
    const url = baseURL + '/blog' + '/blogId' + `/${blogId}`
    const response = await axios.get(url)
    return response.data[0]
}

