import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { LuHome } from "react-icons/lu";


const Navbar = ({ isMenuOpened }) => {
  // change the inputTheme value to light for creative theme
  // const inputTheme = 'light';

  return (
    <React.Fragment>
      <div className="app-menu">
        <Dropdown>
          <Dropdown.Toggle variant="link" className="d-flex align-items-center gap-2 text-black">
            <LuHome size={16}/> Home
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="">Result</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
