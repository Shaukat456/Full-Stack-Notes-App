import './App.css';
import {Container, AppBar , Typography , Grow , Grid, Button, ButtonBase} from '@mui/material'
import { Posts } from './Components/Posts/Posts';
import { Form } from './Components/Form/Form';
import { useSelector , useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { getPost } from './actions/post';

function App() {
  

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPost())
  }, [dispatch ])


  return (
    <>
    <Container   maxWidth='lg'>
      <AppBar position='static'  >
        <Typography variant='h2' align='center'  >
          NOTES SHARING APP
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
<ButtonBase onClick={()=>{
  dispatch(getPost())
}}> Click ME  </ButtonBase>
          <Grid container justify='space-between'  alignItems={'stretch'} spacing={4}>
        <Grid item xs={12} sm={7}>
            <Posts/>
           </Grid>
        <Grid item xs={12} sm={7}>
            <Form/> 
           </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
        </>
  );
}

export default App;
