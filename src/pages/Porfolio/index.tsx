import React from "react";
import FooterMenu from "../../components/PageElements/FooterMenu";
import NavBar from "../../components/PageElements/NavMenu";
import { PortfolioStyle } from "./style";

export default function(){
    return (
        <PortfolioStyle>
            <NavBar />
                
            
            <FooterMenu />
        </PortfolioStyle>
    )
}