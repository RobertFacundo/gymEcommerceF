import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

import Home from '../features/views/Home';
import Products from '../features/views/Products';
import Auth from '../features/views/Auth';
import Profile from '../features/views/Profile';
import Membership from "../features/views/Membership";
import { ProtectedRoute } from "../shared/app/ProtectedRoute";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    {/* <Route path="/products" element={<Products />}>
                        <Route path=":categorySlug" element={<CategoryProducts />} />
                        <Route path=":categorySlug/:productId" element={<ProductDetail />} />
                    </Route> */}
                    <Route path="/auth" element={<Auth />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                    <Route path='/membership' element={<Membership />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
