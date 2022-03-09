import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import PageLand from '../pages/PageLand'
import AboutMe from '../pages/AboutMe'
import Portfolio from '../pages/Porfolio'
import Login from '../pages/Login'
import Skills from '../pages/Skills'


export function AppRoutes(){
    return (
        <Router>
            <Routes>
                {/* <Route path="/cart" element={<Cart />} /> */}
                <Route path="/" element={<PageLand />}/>
                <Route path="/about" element={<AboutMe />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/skills" element={<Skills />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </Router>
    )
}