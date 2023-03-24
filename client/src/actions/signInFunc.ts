import axios from "axios";
import { toast } from "react-toastify";
import { AppDispatch } from "../store";
import { saveUser, toggleAuth } from "../store/reducers/userSlice";
import setCookie from "./setCookie";

export const signInFunc = (email: string, password: string) => {
  return async (dispath: AppDispatch) => {
    try {
      const data = await axios.post("http://localhost:5000/api/auth/signin", {
        email,
        password,
      });
      console.log("user:", data.data.body.user);
      console.log("token:", data.data.body.token);
      dispath(saveUser(data.data.body.user));
      dispath(toggleAuth());
      document.cookie = "token=" + data.data.body.token + ";max-age=3600";
      
    } catch (e) {
      toast.error(e.response.data.message);
      console.error(e);
    }
  };
};
