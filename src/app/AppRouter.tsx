import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

import Home from '../features/views/Home';
import Products from '../features/views/Products';
import Auth from '../features/views/Auth';
import Profile from '../features/views/Profile';
import Membership from "../features/views/Membership";
import CategoryProducts from "../features/views/CategoryProducts";
import CartView from "../features/views/Cart";
import { ProtectedRoute } from "../shared/app/ProtectedRoute";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:categorySlug" element={<CategoryProducts />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/cart" element={<CartView />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                    <Route path='/membership' element={<Membership />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
