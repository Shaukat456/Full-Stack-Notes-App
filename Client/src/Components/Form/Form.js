import { Button, Paper, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'


export const Form = () => {
  const [FormData, SetFormData] = useState({
    FullName: "",
    FatherName: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (FormData.FullName.length <= 0 || FormData.FatherName.length <= 0 || FormData.FullName.length <= 0 & FormData.FatherName.length <= 0) {
      return
    }
    console.log({ FormData })
    return 


  }
  return (
    <div>

      <Paper elevation={0}   >
        <Box

        >
          <form onSubmit={handleSubmit} >

            <TextField value={FormData.FullName} variant="outlined" onChange={(inputVal) => {
              SetFormData({ ...FormData, FullName: inputVal.target.value })
            }} />
            <TextField value={FormData.FatherName} variant="outlined" onChange={(inputVal) => {
              SetFormData({ ...FormData, FatherName: inputVal.target.value })
            }} />

            <Button variant="contained" type='submit'  >Contained</Button>

          </form>
        </Box>
      </Paper>

    </div>
  )
}
