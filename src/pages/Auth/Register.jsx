
import { Button } from "react-bootstrap";

import FormInput from "../../components/FormInput";
import VerticalForm from "../../components/VerticalForm";

import AuthLayout from "../../layout/AuthLayout";



const Register = () => {

  const onSubmit = () =>{
    // dispatch({type:'LOGIN', payload:{authenticated: true}})
    // navigate('/ipsdashboard')
  }

  return (
    <>
      <AuthLayout bottomLinks={<></>}>
        <h4 className="mt-0">Register</h4>
        <p className="text-muted mb-4">
          Enter your company details to create account.
        </p>
        <VerticalForm
          onSubmit={onSubmit}
          // resolver={schemaResolver}
          defaultValues={{ username: "", password: "" }}
        >
          <FormInput
            label="Full Name"
            type="text"
            name="fullname"
            placeholder="Enter your full name"
            containerClass="mb-2"
          />
          <FormInput
            label="Company Email"
            type="text"
            name="companyemail"
            placeholder="Enter your company email"
            containerClass="mb-2"
          />
          <FormInput
            label="Phone Number"
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            containerClass="mb-2"
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            containerClass="mb-2"
          />
          <FormInput
            label="Comfirm Password"
            type="password"
            name="confirmpassword"
            placeholder="Enter comfirm password"
            containerClass="mb-2"
          />
          <FormInput
            label="Description"
            type="textarea"
            name="confirmpassword"
            placeholder="Enter Description"
            containerClass="mb-2"
          />
          <div className="d-grid mb-0 text-center">
            <Button variant="primary" type="submit">
              Request To Register
            </Button>
          </div>

        </VerticalForm>
      </AuthLayout>
    </>
  );
};

export default Register;
