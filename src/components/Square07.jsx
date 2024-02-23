import React, { useState, useEffect } from 'react'
import useTurn from '../context/turn'



function Square07() {
  const [value,setValue] = useState(null)

  const {nextTurn,setNextTurn, handleClick,winner} = useTurn()

  useEffect(() => {
    handleClick(6, value)
  }, [value])

  useEffect(()=>{
    (winner)? document.getElementById("button7").disabled = true : document.getElementById("button7").disabled = false
  },[winner])


  return (
    <>
        <div className=' h-20 w-20 flex justify-center items-center' onClick={()=>{(nextTurn)?setValue('O'):setValue("X"); setNextTurn(!nextTurn); document.getElementById("button7").disabled = true}}>
        <button id="button7" className='text-white text-5xl w-full h-full' >{value}</button>
        </div>
    </>
  )
}

export default Square07