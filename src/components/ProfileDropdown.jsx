import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const ProfileDropdown = ({ profilePic, username }) => {


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  /*
   * toggle profile-dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT', payload: { authenticated: false } });
    setTimeout(() => {
      navigate('/auth/logout')
    }, 200);
  }

  return (
    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle
        id="dropdown-profile"
        as="a"
        role='button'
        onClick={toggleDropdown}
        className={classNames(
          'nav-link nav-user me-0 waves-effect waves-light',
          { show: dropdownOpen }
        )}
      >
        <img src={profilePic} className="rounded-circle" alt="" />
        <span className="pro-user-name ms-1 text-white">
          {username} <i className="mdi mdi-chevron-down"></i>
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu dropdown-menu-end profile-dropdown">
        <div onClick={toggleDropdown}>
          <div className="dropdown-header noti-title">
            <h6 className="text-overflow m-0">Welcome!</h6>
          </div>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item notify-item" role='button' onClick={handleLogout}>
            <LuLogOut className='me-1' />
            <span>Logout</span>
          </a>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

ProfileDropdown.propTypes = {
  profilePic: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default ProfileDropdown;
