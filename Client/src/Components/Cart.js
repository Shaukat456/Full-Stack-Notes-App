import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context'

export const Cart = () => {

  const { score, setScore  } = useContext(AppContext)


  

  function changeThatBtn() {
    if (score < 5) {
      setScore(prev => prev + 1)
    }

  }
  return (
    <div className='bg-blue-100'>
      <button onClick={changeThatBtn}> Click me </button>



    </div>
  )
}
