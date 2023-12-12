import React from "react";
import './Terminal.scss'

const Terminal: React.FC = () => {
    return (
       <>
       <div className={"terminal"}>
           <div className={"terminal box"}>
               <div className={"terminal header"}>
                   <div className={"terminal buttons"}>
                       <p className={"terminal button red"}></p>
                       <p className={"terminal button yellow"}></p>
                       <p className={"terminal button green"}></p>
                   </div>
                   <h1 className={"terminal text"}>-terminal</h1>
               </div>
           </div>
       </div>
       </>
    )
}

export default Terminal;