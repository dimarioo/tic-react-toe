
import Square from "./Components/Square"

export default function GameBoard(){
  return(
  <>
  <div className="row">
    <Square /> 
    <Square />
    <Square />
  </div>
  <div className="row">
    <Square /> 
    <Square />
    <Square />
  </div>
   <div className="row"> 
    <Square /> 
    <Square />
    <Square />
   </div>
  

</>
  )
}