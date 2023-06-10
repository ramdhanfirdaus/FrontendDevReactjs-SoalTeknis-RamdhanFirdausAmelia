import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import {
    Logout
} from "../components/pages/auth/Logout";
import {
    ErrorRoutes
} from "./ErrorRoutes";
import { useAuth } from '../components/pages/auth';
import {PrivateRoutes} from "./PrivateRoutes";
import {AuthRoutes} from "./AuthRoutes";
import {App} from "../App"

function AppRoutes() {
    const {auth} = useAuth()
    const currentUser = auth?.username

    return (
        <Router>
            <Routes>
                <Route element={<App />}>
                    <Route path='error/*' element={<ErrorRoutes />} />
                    <Route path='logout' element={<Logout />} />
                    {currentUser ? (
                        <>
                            <Route path='*' element={<PrivateRoutes />} />
                        </>
                    ) : (
                        <>
                            <Route path='auth/*' element={<AuthRoutes />} />
                            <Route path='' element={<Navigate to='/auth' />} />
                        </>
                    )}
                    <Route path='*' element={<Navigate to='/error' />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;
