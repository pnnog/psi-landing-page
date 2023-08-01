import { grid } from "components/UI"

const Grid = ({type, children}) =>{
  return(
    <div className={grid({type})}>
      {children}
    </div>
   ) 
}

export default Grid