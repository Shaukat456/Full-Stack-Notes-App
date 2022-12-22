import axios from "axios";
import React, { useContext } from "react";
import { AppContext } from "../context";
import { Array_Object_Map } from "./Map";



export const Endpoint = (EndPointName) => {
  // const { bookName, SetBookName , list=[] ,setList} = useContext(AppContext)

  // console.log({bookName})
  // { query ? query : null }
  // { subQuery ? subQuery : null }

  //query parameters must be starting with /
  const BaseURL = process.env.REACT_APP_BASE_URL;
  // console.log(BaseURL)
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_BASE_URL}/search/${''}`,
    headers: {
      'X-RapidAPI-Key':`2692f803e5mshe0f2801d1bdee64p1165f7jsnf04bbdb2f2bc`,
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    // Array_Object_Map(response.data)
    // setList(response.data)
    console.log({response} )
    

  }).catch(function (error) {
    console.error(error);
  });

}


