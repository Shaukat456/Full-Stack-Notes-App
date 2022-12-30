import { Button, Paper, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/post';

export const Form = () => {

  const dispatch= useDispatch()

  const [FormData, SetFormData] = useState({
    title: "",
    message: "",
    creator: "",
    createdAt: "",
    selectedFile: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validations 
    // if (FormData.FullName.length <= 0 || FormData.FatherName.length <= 0 || FormData.FullName.length <= 0 & FormData.FatherName.length <= 0) {
      //   return
      // }
      // console.log({ FormData })

     return  dispatch(createPost(FormData))



  }
  return (
    <div>

      <Paper elevation={0}   >
        <Box

        >
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
