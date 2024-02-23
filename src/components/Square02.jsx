import React, { useEffect, useState } from 'react'
import useTurn from '../context/turn'

function Square02() {
  const [value, setValue] = useState(null)

  const { nextTurn, setNextTurn, handleClick, winner } = useTurn()

  useEffect(() => {
    handleClick(1, value)
  }, [value])

  useEffect(()=>{
    (winner)? document.getElementById("button2").disabled = true : document.getElementById("button2").disabled = false
  },[winner])

  return (
    <>
      <div className=' h-20 w-20 border border-gray-500 border-t-0 border-b-0 flex justify-center items-center' onClick={() => { (nextTurn) ? setValue('O') : setValue("X"); setNextTurn(!nextTurn); document.getElementById("button2").disabled = true }}>
        <button id='button2' className='text-white text-5xl w-full h-full' >{value}</button>
      </div>
    </>
  )
}

export default Square02