import React, { useEffect, useState } from 'react'
import '../CSS/Box.css'
import Square01 from './Square01'
import Square02 from './Square02'
import Square03 from './Square03'
import Square04 from './Square04'
import Square05 from './Square05'
import Square06 from './Square06'
import Square07 from './Square07'
import Square08 from './Square08'
import Square09 from './Square09'
import useTurn from '../context/turn'


function GameBoard() {
    const [draw,setDraw] = useState(true)
    const { turn,squares,winner } = useTurn()

    useEffect(()=>{
        const draw = squares.includes(null)
        setDraw(draw)
    },[squares])
    return (
        <>

            <div id='container' className='w-1/2  flex flex-col gap-10 justify-center items-center'>
                <div>
                    <h1 className={`text-center text-white text-3xl font-bold ${(!draw && !winner)? 'visible animate-bounce': ' invisible'}`}>Match Draw </h1> 
                    <h1 className={`text-center text-white text-3xl font-bold ${(winner)? 'visible animate-bounce': ' invisible'}`}>Winner is : {winner}</h1> 
                </div>
                <div className=''>
                    <div className='flex'>
                        <Square01></Square01>
                        <Square02></Square02>
                        <Square03></Square03>

                    </div>
                    <div className='flex'>
                        <Square04></Square04>
                        <Square05></Square05>
                        <Square06></Square06>
                    </div>
                    <div className='flex'>
                        <Square07></Square07>
                        <Square08></Square08>
                        <Square09></Square09>
                    </div>

                </div>
                <div className='flex'>
                    <h1 className={`text-center text-white text-2xl font-semibold ${(winner || !draw)? 'invisible opacity-0 duration-700':'visible'}`}>Next Turn : {turn}</h1>
                </div>
                <a className='text-white cursor-pointer text-lg font-medium' href='/'>Restart ↺</a>
            </div>

        </>
    )
}

export default GameBoard