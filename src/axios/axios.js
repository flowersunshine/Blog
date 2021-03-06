import axios from 'axios'

axios.defaults.baseURL = 'http://45.76.2.56:3001/';

export function addVisit(){
    return axios.put('visit')
}
export function getVisit(){
    return axios.get('visit')
}
export function getPostList() {
    return axios.get('postlist')
}
export function getArticle(id) {
    return axios.get(`article/${id}`)
}
export function addComment(id, content){
    return axios.post('comment',{id: id, content: content, date: new Date()})
}
export function deleteComment(id){
    return axios.delete(`comment/${id}`)
}
export function getComment(id){
    return axios.get(`/comment/${id}`)
}
export function addRead(id){
    return axios.put(`/read/${id}`)
}
export function addLike(id){
    return axios.put(`/like/${id}`)
}
export function getAncillaryInfoAndComment(id){
    return axios.get(`/ancillaryInfoAndComment/${id}`)
}