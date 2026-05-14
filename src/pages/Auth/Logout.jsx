import { Link } from "react-router-dom";

// Actions

// Components
import AuthLayout from "../../layout/AuthLayout";

const LogoutIcon = () => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
      <circle className="path circle" fill="none" stroke="#4bd396" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
      <polyline className="path check" fill="none" stroke="#4bd396" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5" />
    </svg>
  );
};

/* Bottom link */
const BottomLink = () => {
  return (
    <footer className="footer footer-alt">
      <p className="text-muted">
        Back to{" "}
        <Link to={"/auth/login"} className="text-muted ms-1">
          <b>Sign In</b>
        </Link>
      </p>
    </footer>
  );
};

const Logout = () => {

  return (
    <>
      <AuthLayout bottomLinks={<BottomLink />}>
        <div className="text-center">
          <div className="mt-4">
            <div className="logout-checkmark">
              <LogoutIcon />
            </div>
          </div>

          <h3>See you again!</h3>

          <p className="text-muted">
            You are now successfully signed out.
          </p>
        </div>
      </AuthLayout>
    </>
  );
};

export default Logout;
