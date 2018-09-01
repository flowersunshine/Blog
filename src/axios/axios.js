import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/';

export function getPostList() {
    return axios.get('postlist')
}
export function getArticle(id) {
    return axios.get(`article/${id}`)
}