import * as api from '../api/index'


export const getPost = () => {
    return async (dispatch) => {
        try {
            const { data } = await api.fetchPosts();
            console.log({data})
            dispatch({
                type: "FETCH_ALL",
                payload: data
            })

        } catch (error) {
            console.log(error.message)
        }
    }
}

export const createPost=(Another_Post)=>{
    return async (dispatch)=>{
        const { data } = await api.Create_Posts(Another_Post)
            try {
            dispatch({
                type: "CREATE_POST",
                payload: data
            })
                
            } catch (error) {
                console.log(error.message)
            }
    }
}