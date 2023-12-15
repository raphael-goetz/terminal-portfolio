import React from "react";
import Image from "next/image";

import terminal from "@/components/assets/terminal.svg";
import "./header.scss"
const Header: React.FC = () => {

    return (
        <>
            <div className={"header__box"}>
                <div className={"header__buttons"}>
                    <p className={"header__button red"}></p>
                    <p className={"header__button yellow"}></p>
                    <p className={"header__button green"}></p>
                </div>
                <Image src={terminal} alt={"terminal"} className={"header__svg"}/>
                <h1 className={"header__text"}> terminal</h1>
            </div>
        </>
    )
}

export default Header;