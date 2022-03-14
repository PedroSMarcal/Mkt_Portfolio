import { css } from '@stitches/core'
import { NavLink } from 'react-router-dom'
import { NavStyle } from './styled'

export default function NavBar(){
    return (
        <div style={divStyle}>
            <nav>
                <li>
                    <NavLink to={'/'}>Landing Page</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About Me</NavLink>
                </li>
                <li>
                    <NavLink to={'/portfolio'}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to={'/skills'}>Skills</NavLink>
                </li>
                <li>
                    <NavLink to={'/login'}>Login</NavLink>
                </li>
            </nav>
        </div>
    )
}   

const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    
}