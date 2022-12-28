import axios from 'axios'


const url = 'http://localhost:5000/posts'


export const fetchPosts=()=> axios.get(url)
export const Create_Posts=(Post)=> axios.post(url , Post)