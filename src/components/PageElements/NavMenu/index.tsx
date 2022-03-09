import { Link } from 'react-router-dom'
import { nav } from './styled'

export default function NavBar(){
    return (
        <>
            <nav className={nav({variant:  'yellow'})}>
                <Link to={'/'}>Landing Page</Link>
                <Link to={'/about'}>About Me</Link>
                <Link to={'/portfolio'}>Portfolio</Link>
                <Link to={'/skills'}>Skills</Link>
                <Link to={'/login'}>Login</Link>
            </nav>
        </>
    )
}   
