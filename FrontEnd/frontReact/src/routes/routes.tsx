import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import PageLand from '../pages/PageLand'

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                {/* <Route path="/cart" element={<Cart />} /> */}
                <Route path="/" element={<PageLand />}/>
            </Routes>
        </Router>
    )
}