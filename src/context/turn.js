import { createContext, useContext } from "react";



export const turnContext = createContext({
    turn:"X",
    setTurn:()=>{},
    nextTurn:false,
    setNextTurn:()=>{},
    squares:[null,null,null,null,null,null,null,null,null],
    setSquares:()=>{},
    handleClick:()=>{}
})

export const TurnContextProvider = turnContext.Provider

export default function useTurn(){
    return useContext(turnContext)
}