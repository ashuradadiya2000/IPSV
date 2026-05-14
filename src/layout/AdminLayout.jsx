import { Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";

const AdminLayout = () => {
    return (
        <main>
            <AdminHeader />
            <div className="admin-side-wrap">
                <div className="admin-content">
                    <AdminSideBar />
                    <div className="admin-inner">
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AdminLayout