import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";

const AppRoutes = () => {
    return(
        <Routes>
            <Route element={<ProtectRoute />}>
                <Route path="/user-profile" element={<Layout><UserProfilePage /></Layout>}/>
                <Route path="/user-restaurant" element={<Layout><ManageRestaurantPage /></Layout>}/>
            </Route>
            <Route path="/auth-callback" element={<Layout><AuthCallbackPage /></Layout>}/>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/user-profile" element={<span>User Profile Page</span>} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes;