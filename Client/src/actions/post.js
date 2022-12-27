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

// export const Create_Post = () => {
//     return async (dispatch) => {
//         try {
//             const { data } = await api.fetchPosts();
//             dispatch({
//                 type: "FETCH_ALL",
//                 payload: data
//             })

//         } catch (error) {
//             console.log(error.message)
//         }
//     }
// }
