import axios from "axios";
import { toast } from "react-toastify";
import { AppDispatch } from "../store";
import { saveUser, toggleAuth } from "../store/reducers/userSlice";
import setCookie from "./setCookie";

export const signUpFunc = (email: string, password: string) => {
  return async (dispath: AppDispatch) => {
    try {
      const data = await axios.post("http://localhost:5000/api/auth/signup", {
        email,
        password,
      });
      console.log("user", data.data.body.user);
      console.log("token", data.data.body.token);

      dispath(saveUser(data.data.body.user));
      dispath(toggleAuth());
      document.cookie = "token=" + data.data.body.token + ";max-age=3600";
      console.log("login was successfully", data.data);
    } catch (e) {
      toast.error(e.response.data.message);
      console.error(e);
    }
  };
};
