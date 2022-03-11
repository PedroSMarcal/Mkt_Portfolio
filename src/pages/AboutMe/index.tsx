import React from "react"
import FooterMenu from "../../components/PageElements/FooterMenu"
import NavBar from "../../components/PageElements/NavMenu"
import { AboutStyle } from "./styled"

export default function PageLand(){ 
    return (
        <AboutStyle>
            <NavBar />

            <FooterMenu />
        </AboutStyle>
    )
    
}