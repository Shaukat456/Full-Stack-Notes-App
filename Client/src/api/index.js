import axios from 'axios'


const url = 'http://localhost:5000/posts'


export const fetchPosts=()=> axios.get(url)
export const Create_Posts=(Another_Post)=> axios.post({
     body: JSON.stringify(Another_Post)
})