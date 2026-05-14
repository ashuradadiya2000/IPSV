
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import FormInput from "../../components/FormInput";
import VerticalForm from "../../components/VerticalForm";

import AuthLayout from "../../layout/AuthLayout";
import { login } from "../../services/auth";



const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    console.log('value', value);
    dispatch({ type: 'LOGIN', payload: { authenticated: true, token: 'data.jwt' } })
    try {
      const { status, data } = await login(value);
      console.log('status, data', status, data);
      if (status === 200) {
        localStorage.setItem('authToken', data.jwt)
        dispatch({ type: 'LOGIN', payload: { authenticated: true, token: data.jwt } })
        navigate('/ipsdashboard')
      }

    } catch (error) {
      console.log('error', error);

    }
  }

  return (
    <>
      <AuthLayout bottomLinks={<></>}>
        <h4 className="mt-0">Sign In</h4>
        <p className="text-muted mb-4">
          Enter your email address and password to access account.
        </p>

        {/* {error && (
          <Alert variant="danger" className="my-2">
            {error}
          </Alert>
        )} */}

        <VerticalForm
          onSubmit={onSubmit}
          // resolver={schemaResolver}
          defaultValues={{ email: "parth@gmail.com", password: "admin123" }}
        >
          <FormInput
            label="Email"
            type="text"
            name="email"
            placeholder="Enter your Email"
            containerClass={"mb-3"}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            containerClass={"mb-3"}
          >
            <Link to="/auth/forget-password" className="text-muted float-end">
              <small>Forgot your password?</small>
            </Link>
          </FormInput>

          {/* <FormInput
            label="Remember me"
            type="checkbox"
            name="checkbox"
            containerClass={"mb-3"}
          /> */}

          <div className="d-grid mb-0 text-center">
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </div>

        </VerticalForm>
      </AuthLayout>
    </>
  );
};

export default Login;
