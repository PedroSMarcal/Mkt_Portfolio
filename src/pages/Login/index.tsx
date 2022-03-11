import React from "react";
import { LoginStyled } from "./style";

export default function(){
    return (
    <LoginStyled>
        Login
        <input type="text" placeholder="login"/>
        Password
        <input type="text" placeholder="password"/>

        <button> Login </button>
    </LoginStyled>
    )
}