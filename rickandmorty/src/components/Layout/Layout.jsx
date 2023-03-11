import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Login from "components/Login/Login";
const Layout = () => {
    return (
        <div>
            <Login />
            <Home />
            <Outlet />
        </div>
    )
}

export default Layout;