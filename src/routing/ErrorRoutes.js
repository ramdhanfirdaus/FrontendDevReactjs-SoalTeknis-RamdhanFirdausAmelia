/* eslint-disable jsx-a11y/anchor-is-valid */
import {Route, Routes} from 'react-router-dom'
import {Error500} from '../components/pages/error/Error500'
import {Error404} from '../components/pages/error/Error404'
import React from "react";

const ErrorRoutes = () => (
    <>
        <Routes>
            <Route path='404' element={<Error404 />} />
            <Route path='500' element={<Error500 />} />
            <Route index element={<Error404 />} />
        </Routes>
    </>
)

export {ErrorRoutes}
