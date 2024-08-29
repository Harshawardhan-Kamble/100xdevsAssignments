import { createContext } from "react";

export const CountContext=createContext({
    count:0,
    setCount:()=>{}
    // can do count,setCount
})