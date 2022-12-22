import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context'

export const ScorePoster = () => {
    const {score, setScore } =  useContext(AppContext)
    
  return (
    <div>
        <h1> {score}  </h1>

    </div>
  )
}
