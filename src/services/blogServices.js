import axios from "axios"

const baseURL = import.meta.env.VITE_BASE_URL

export const fetchAllBlogs = async (set) => {
    const url = import.meta.env.VITE_BASE_URL + '/blog/fetchall'
    const response = await axios.get(url)
    set(response.data)
}

export const userBlogs = async (id, set) => {
    const url = import.meta.env.VITE_BASE_URL + '/blog/userid/' + id
    const response = await axios.get(url)
    if (response.status == 200) {
        set(response.data)
    }
    return response.status === 200
}

export const postBlog = async (blog) => {
    const url = baseURL + '/blog' + '/create'
    const config = {
        headers: {
            'auth-token': localStorage.getItem('jwt_token')
        }
    }
    console.log(blog)
    const response = await axios.post(url, blog, config)
    return response.status
}

export const updateBlog = async (blogId, blog) => {
    const url = baseURL + '/blog' + '/edit/' + blogId
    const config = {
        headers: {
            'auth-token': localStorage.getItem('jwt_token')
        }
    }
    const response = await axios.put(url, blog, config)
    return response.status
}

export const getBlog = async (blogId) => {
    const url = baseURL + '/blog' + '/blogId' + `/${blogId}`
    const response = await axios.get(url)
    return response.data
}

export const removeBlog = async (blogId) => {
    const url = baseURL + '/blog' + '/remove' + `/${blogId}`
    const config = {
        headers: {
            'auth-token': localStorage.getItem('jwt_token')
        }
    }
    const response = await axios.delete(url, config)
    return response.status
}
export const getCategories = async () => {
    const url = baseURL + '/category' + '/getall'
    const response = await axios.get(url)
    return response.data
}

