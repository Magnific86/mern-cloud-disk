import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpFunc } from "../actions/signUpFunc";
import { EmailPassForm } from "../components/EmailPassForm";
import { useAppDispatch } from "../store/storeHooks";

export const SignUp: FC = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePass = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, pass);

    if (email && pass) {
      navigate("/personalCabinet");
      dispatch(signUpFunc(email, pass));
    } else {
      setError("Fill in all fields...");
    }
  };

  return (
    <EmailPassForm
      handleSubmit={handleSubmit}
      email={email}
      pass={pass}
      handleEmail={handleEmail}
      handlePass={handlePass}
      error={error}
      btnText="Sign Up"
      greetingText="Welcome, fill in form to sign up"
    />
  );
};
