import React from "react";
import './terminal.scss'

import Header from "@/components/header/header";
import Display from "@/components/display/display";

const Terminal: React.FC = () => {
    return (
       <>
       <div className={"terminal"}>
           <div className={"terminal__box"}>
                <Header />
                <Display />
           </div>
       </div>
       </>
    )
}

export default Terminal;