import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LogoDark from '/ips-logo.png';
import LogoLight from '/ips-logo.png';

const AuthLayout = ({ bottomLinks, children }) => {
  useEffect(() => {
    if (document.body)
      document.body.classList.remove(
        'authentication-bg',
        'authentication-bg-pattern'
      );
    if (document.body) document.body.classList.add('auth-fluid-pages', 'pb-0');

    return () => {
      if (document.body)
        document.body.classList.remove('auth-fluid-pages', 'pb-0');
    };
  }, []);

  return (
    <>
      <div className="auth-fluid">
        {/* Auth fluid left content */}
        
        <div className="auth-fluid-right text-center">
          <div className="auth-user-testimonial">
            <h2 className="mb-3 text-white">
              The EXPERTS in exploring INNOVIGENCE® available deep inside of
              your PATENT
            </h2>
            <p className="lead">
              <i className="mdi mdi-format-quote-open"></i> We work & engage
              with the global corporations, law firms, educational institutes,
              start-ups accelerator & incubator centers and individual inventors
              by offering strategic and comprehensive suite of end-to-end IP
              solutions to meet their challenges and lead them confidently in
              their industry innovation.{' '}
              <i className="mdi mdi-format-quote-close"></i>
            </p>
            <h5 className="text-white">- IntellectPeritus</h5>
          </div>
        </div>
        <div className="auth-fluid-form-box">
          <div className="align-items-center d-flex h-100">
            <Card.Body>
              {/* logo */}
              <div className="auth-brand text-center text-lg-start">
                <div className="auth-logo">
                  <Link
                    to="/"
                    className="logo logo-dark text-center outline-none"
                  >
                    <span className="logo-lg">
                      <img src={LogoDark} alt="" height="70" />
                    </span>
                  </Link>

                  <Link to="/" className="logo logo-light text-center">
                    <span className="logo-lg">
                      <img src={LogoLight} alt="" height="70" />
                    </span>
                  </Link>
                </div>
              </div>

              {children}
              {/* footer links */}
              {bottomLinks}
            </Card.Body>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
