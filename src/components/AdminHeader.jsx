import { Navbar } from 'react-bootstrap'
import logoLight from '/logo-light.png';
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import profilePic from '/users/user-1.jpg';

const AdminHeader = () => {
    return (
        <Navbar className="admin-navbar-custom px-2">
            <Navbar.Brand href="#home">
                <Link to="/admin/users-registration" className="logo logo-dark text-center">
                    <span className="logo-lg">
                        <img src={logoLight} alt="" height="50" />
                    </span>
                </Link>
            </Navbar.Brand>
            <ProfileDropdown
                profilePic={profilePic}
                username={'Admin'}
                userTitle={'Founder'}
            />
        </Navbar>
    )
}

export default AdminHeader