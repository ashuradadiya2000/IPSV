import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NotificationDropdown from '../components/NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';

import profilePic from '/users/user-1.jpg';
import logoSm from '/logo-sm.png';
import logoLight from '/ips-logow.png';
import logoLight2 from '/logo-light.png';

const Notifications = [
  {
    id: 1,
    text: 'Refrence workspace 1',
    subText: 'Hi, workspce is updated',
    bgColor: 'info',
  },
  {
    id: 2,
    text: 'Refrence workspace 2',
    subText: '1 min ago',
    icon: 'mdi mdi-comment-account-outline',
    bgColor: 'primary',
  },
  {
    id: 3,
    text: 'Refrence workspace 3',
    subText: 'project update ',
    bgColor: 'info',
  },
  {
    id: 4,
    text: 'Refrence workspace 4',
    subText: '5 hours ago',
    icon: 'mdi mdi-account-plus',
    bgColor: 'warning',
  },
];



const Topbar = ({ hideLogo }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Adjust scroll position as needed
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div className={`navbar-custom ${isSticky ? 'sticky' : ''}`}>
        <div className={`topbar px-2`}>
          <div className="topbar-menu d-flex align-items-center gap-1">
            {!hideLogo && (
              <div className="logo-box">
                <Link to="/ipsdashboard" className="logo logo-dark text-center">
                  <span className="logo-sm">
                    <img src={logoLight} alt="" height="70" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight} alt="" height="50" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light text-center">
                  <span className="logo-sm">
                    <img src={logoSm} alt="" height="70" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight2 ?? logoLight} alt="" height="50" />
                  </span>
                </Link>
              </div>
            )}
          </div>

          <ul className="topbar-menu d-flex align-items-center">
            <li className="dropdown notification-list">
              <NotificationDropdown notifications={Notifications} />
            </li>

            <li className="dropdown">
              <ProfileDropdown
                profilePic={profilePic}
                username={'Parth'}
                userTitle={'Founder'}
              />
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;
