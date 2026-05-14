import { Link, useLocation } from "react-router-dom"
import { FaUserCog } from "react-icons/fa";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GrAction } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";


const AdminSideBar = () => {
    const { pathname } = useLocation()
    return (
        <div className='sidebar'>
            <ul>
                <li className={pathname.includes('/dashboard') ? 'active' : ''}>
                    <Link to='/admin/dashboard'><FaUserAlt size={20} className="me-2" /> Dashboard</Link>
                </li>
                <li className={pathname.includes('users-registration') ? 'active' : ''}>
                    <Link to='/admin/users-registration'><FaUserAlt size={20} className="me-2" /> User Registration</Link>
                </li>
                <li className={pathname.includes('manage-user') ? 'active' : ''}>
                    <Link to='/admin/manage-user'><FaUserCog size={24} className="me-2" /> Manage User</Link>
                </li>
                <li className={pathname.includes('company') ? 'active' : ''}>
                    <Link to='/admin/company'><MdOutlineMapsHomeWork size={24} className="me-2" /> Add OR Manage Company</Link>
                </li>
            </ul>
        </div>
    )
}

export default AdminSideBar