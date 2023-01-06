import { Button, Paper, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/post';

export const Form = ({ currentID, SetCurrentId }) => {

  const dispatch = useDispatch()

  const post = useSelector((state) => {
    return currentID ? state.posts.find((p) => {
      return p._id === currentID
    }) : null
  })
  


  const [FormData, SetFormData] = useState({
    title: "",
    message: "",
    creator: "",
    createdAt: "",
    selectedFile: "",
  })
  
  useEffect(() => {
    console.log("post updated ")
    // SetFormData(post)
  },[post])

  const handleSubmit = (e) => {

    e.preventDefault();

    // Validations 
    // if (FormData.FullName.length <= 0 || FormData.FatherName.length <= 0 || FormData.FullName.length <= 0 & FormData.FatherName.length <= 0) {
    //   return
    // }
    // console.log({ FormData })

    if (currentID) {
      return dispatch(updatePost(currentID, FormData))
    }
    else {
      return dispatch(createPost(FormData))
    }


  }
  return (
    <div>

      <Paper elevation={0}   >
        <Box>
          <form onSubmit={handleSubmit} >

            <TextField value={FormData.title} variant="outlined" onChange={(inputVal) => {
              SetFormData({ ...FormData, title: inputVal.target.value })
            }} />
            <TextField value={FormData.creator} variant="outlined" onChange={(inputVal) => {
              SetFormData({ ...FormData, creator: inputVal.target.value })
            }} />
            <TextField value={FormData.message} variant="outlined" onChange={(inputVal) => {
              SetFormData({ ...FormData, message: inputVal.target.value })
            }} />

            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => SetFormData({ ...FormData, selectedFile: base64 })}
            />

            <Button variant="contained" type='submit'  >Contained</Button>

          </form>
        </Box>
      </Paper>

    </div>
  )
}
