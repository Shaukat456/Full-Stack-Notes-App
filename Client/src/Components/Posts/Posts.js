import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material';
import { getPost } from '../../actions/post';
import { Post } from './Post/Post';
export const Posts = () => {

  //use selector access all states in the store
  const posts= useSelector(globalState=> globalState.posts)

  console.log(posts)
  
  // const dispatch = useDispatch()
    
  return (
    <div style={{display:'flex'}}>
      {!posts.length ? <CircularProgress/>: posts.map((val)=>{
        return <Post postFromGlobalState={val}/>
      })}
      
      
      
    </div>
  )
}
