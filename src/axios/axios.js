import axios from 'axios'

axios.defaults.baseURL = 'http://45.77.35.56/api/';

function addVisit(){
    return axios.put('visit')
}
function getVisit(){
    return axios.get('visit')
}
function getPostList() {
    return axios.get('postlist')
}
function getArticle(id) {
    return axios.get(`article/${id}`)
}
function addComment(id, content){
    return axios.post('comment',{id: id, content: content, date: new Date()})
}
function deleteComment(id){
    return axios.delete(`comment/${id}`)
}
function getComment(id){
    return axios.get(`/comment/${id}`)
}
function addRead(id){
    return axios.put(`/read/${id}`)
}
function addLike(id){
    return axios.put(`/like/${id}`)
}
function getAncillaryInfoAndComment(id){
    return axios.get(`/ancillaryInfoAndComment/${id}`)
}
export  { getPostList, addComment, getComment, getAncillaryInfoAndComment, addLike, addRead, getArticle, getVisit } 