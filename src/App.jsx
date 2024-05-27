
import { useEffect, useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'
import { TurnContextProvider } from './context/turn'



function App() {
  const [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null])
  const [nextTurn, setNextTurn] = useState(false)
  const [turn, setTurn] = useState("X")
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    (nextTurn) ? setTurn('O') : setTurn("X")
  }, [nextTurn])

  useEffect(() => {
    const winner = calculateWinner(squares)
    setWinner(winner)
    console.log(winner)
  }, [squares])

  function handleClick(index, value) {
    setSquares((prev) => {
      const next = [...prev]
      next[index] = value
      return next
    })
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(i)
        return squares[a];
      }

    }
    return null;
  }

  return (
    <>

      <div id='app' className='h-screen w-screen flex justify-center items-center'>
        <TurnContextProvider value={{ turn, setTurn, nextTurn, setNextTurn, squares, setSquares, handleClick, winner }}>
          <GameBoard></GameBoard>
        </TurnContextProvider>

      </div>
    </>
  )
}

export default App
