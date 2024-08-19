
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import UserCreate from "../pages/UserCreate";
import Login from "../pages/Login/Login";
import Product from "../pages/Product";
import Category from "../pages/Category";
import Profile from "../pages/Profile/Profile";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/register" element={<UserCreate />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/profile" element={<Profile />} />
            <Route path="/products" element={<Product />} />
            <Route path="/categories" element={<Category />} />
            {/* ... demais rotas */}
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
