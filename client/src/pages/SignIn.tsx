import { ChangeEvent, FormEvent, useState } from "react";
import { signInFunc } from "../actions/signInFunc";
import { EmailPassForm } from "../components/EmailPassForm";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import getCookie from "../actions/getCookie";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.currentUser);
  const isAuth = useAppSelector((state) => state.user.isAuth);

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
      console.log("IN IF");
      navigate("/personalCabinet");
      dispatch(signInFunc(email, pass));
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
      btnText="Sign In"
      greetingText="Log in"
    />
  );
};
