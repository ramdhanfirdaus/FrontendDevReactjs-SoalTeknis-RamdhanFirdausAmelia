import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import RestaurantsPage from "../components/pages/restaurant/RestaurantsPage";
import DetailRestaurantPage from "../components/pages/restaurant/DetailRestaurantPage";

const PrivateRoutes = () => {

    return (
        <>
            <Routes>
                <Route index path="" element={<Navigate to="/list-restaurant" />} />
                <Route index path="list-restaurant" element={<RestaurantsPage />} />
                <Route index path="detail-restaurant/:id" element={<DetailRestaurantPage />} />
                <Route path="auth/*" element={<Navigate to="/list-restaurant" />} />
                <Route path="*" element={<Navigate to="/error" />} />
            </Routes>
        </>
    );
};

export { PrivateRoutes };
