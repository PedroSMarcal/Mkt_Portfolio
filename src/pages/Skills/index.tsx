import React from "react";
import FooterMenu from "../../components/PageElements/FooterMenu";
import NavBar from "../../components/PageElements/NavMenu";
import { SkillStyles } from "./style";

export default function(){
    return (
        <SkillStyles>
            <NavBar />
                
            <FooterMenu />
        </SkillStyles>
    )
}