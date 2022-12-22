import React, { createContext } from "react";
import { useState } from "react";



export const AppContext = createContext();
 
export const AppProvider=({children})=>{
    const [bookName, SetBookName] = useState('rich')

    const [score , setScore] = useState(0)
    // starting from first question 
    const [question  , setquestion] = useState(0)
    const [ list  , setList]= useState([])

   
    return (
        <AppContext.Provider value={{   score , setScore , question  , setquestion , bookName, SetBookName  , list  , setList}}>
            {children}
        </AppContext.Provider>
    )
}