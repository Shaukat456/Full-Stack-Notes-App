import React from 'react'
import { useSelector } from 'react-redux'

export const Posts = () => {
    //use selector access all states in the store
    const posts= useSelector(globalState=> globalState)
    console.log({posts})
  return (
    <div>Posts</div>
  )
}
