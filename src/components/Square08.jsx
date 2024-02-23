import React, { useEffect, useState } from 'react'
import useTurn from '../context/turn'


function Square08() {
  const [value, setValue] = useState(null)

  const { nextTurn, setNextTurn, handleClick, winner} = useTurn()

  useEffect(() => {
    handleClick(7, value)
  }, [value])

  useEffect(()=>{
    (winner)? document.getElementById("button8").disabled = true : document.getElementById("button8").disabled = false
  },[winner])
  
  return (
    <>
      <div className=' h-20 w-20 border border-gray-500 border-y-0 flex justify-center items-center' onClick={() => { (nextTurn) ? setValue('O') : setValue("X"); setNextTurn(!nextTurn); document.getElementById("button8").disabled = true }}>
        <button id='button8' className='text-white text-5xl w-full h-full'>{value}</button>
      </div>
    </>
  )
}

export default Square08