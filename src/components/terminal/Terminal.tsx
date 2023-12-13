import React from "react";
import terminal from "../assets/terminal.svg"
import './Terminal.scss'
import Image from "next/image";

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
                   <Image src={terminal} alt={"terminal"} className={"svg"}/>
                   <h1 className={"terminal text"}> terminal</h1>
               </div>
           </div>
       </div>
       </>
    )
}

export default Terminal;