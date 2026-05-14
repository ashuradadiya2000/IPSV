import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";


const Topbar = React.lazy(() => import("../components/Topbar"));
const Footer = React.lazy(() => import("../components/Footer"));


const HorizontalLayout = () => {

  const navigate = useNavigate();
  const { authenticated } = useSelector((state) => state.auth)
  
  useEffect(()=>{
    if(!authenticated){
      navigate('/auth/login')
    }
  },[authenticated])
  
  return (
    <>
      <div id="wrapper">
        <div className="content-page">
          <Topbar />
          <div className="content">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HorizontalLayout;