import axios from 'axios'

const instance = axios.create({
        baseURl: 'http://www.wangxiaotian.com/api',
     })

export function getPostList() {
    return instance.get('postList')
}
export function getArticle(id) {
    return instance.get(`article/${id}`)
}