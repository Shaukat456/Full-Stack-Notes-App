import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export const Post = ({postFromGlobalState , setCurrentId}) => {
  const { _id, title , creator , message , selectedFile }=postFromGlobalState
  
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={selectedFile}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {creator}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete </Button>
        <Button size="small"  onClick={()=>{
         setCurrentId(_id)
         console.log(_id)
        }}>Update</Button>
      </CardActions>
    </Card>
    </div>
  )
}
