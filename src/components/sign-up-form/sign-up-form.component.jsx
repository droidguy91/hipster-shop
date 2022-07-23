import { useState } from "react";
import {
  createAuthUserFromUsernameAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-container.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFeilds] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFeilds = () => {
    setFormFeilds(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFeilds({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserFromUsernameAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in user");
        return;
      }
      console.log("User creation encountered an error", e);
    } finally {
      resetFormFeilds();
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I dont have an account.</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
