import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import Card from './Components/Card'
import { Cart } from './Components/Cart'
import { AppContext } from './context'
import { ReqContext } from './ReqContext'

export const Main = () => {
  const { bookName ,setList} = useContext(AppContext)


//   const EndpointFunc = (EndPointName) => {

//     //query parameters must be starting with /
//     const BaseURL = process.env.REACT_APP_BASE_URL;
//     const options = {
//       method: 'GET',
//       url: `${process.env.REACT_APP_BASE_URL}/search/${bookName}`,
//       headers: {
//         // 'X-RapidAPI-Key': `2692f803e5mshe0f2801d1bdee64p1165f7jsnf04bbdb2f2bc`,
//         'X-RapidAPI-Key': `${process.env.REACT_APP_XRapidAPIKey}`,
//         'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
//       }
//     };
//     axios.request(options).then(function ({data ,status }) {
//       // Array_Object_Map(response.data)
//       // setList(response.data)
//       console.log({ data })
      

//     }).catch(function (error) {
//       console.error(error);
//     });

//   }

  return (
    <div>
            <Card/>
            <Cart/>

    


    </div>
  )
}
