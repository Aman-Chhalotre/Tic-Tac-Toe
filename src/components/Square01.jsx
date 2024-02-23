import React, { useEffect, useState } from 'react'
import useTurn from '../context/turn'

function Square01() {
  const [value, setValue] = useState(null)

  const { nextTurn, setNextTurn, handleClick, winner } = useTurn()

  useEffect(() => {
    handleClick(0, value)
  }, [value])

  useEffect(()=>{
    (winner)? document.getElementById("button1").disabled = true : document.getElementById("button1").disabled = false
  },[winner])

  return (
    <>

      <div id='square01' className='h-20 w-20 flex justify-center items-center' onClick={() => { (nextTurn) ? setValue('O') : setValue("X"); setNextTurn(!nextTurn); document.getElementById("button1").disabled = true }} >
        <button id='button1' className='text-white text-5xl w-full h-full' >{value}</button>
      </div>


    </>
  )
}

export default Square01