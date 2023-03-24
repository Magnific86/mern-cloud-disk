import axios from "axios";
import { saveUser, toggleAuth } from "../store/reducers/userSlice";
import deleteCookie from "./deleteCookie";
import getCookie from "./getCookie";
import setCookie from "./setCookie";

export const authFunc = () => {
  return async (dispath: any) => {
    try {
      const token = getCookie("token");
      console.log("getCookietoken", token);
      const data = await axios.get("http://localhost:5000/api/auth/auth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("http://localhost:5000/api/auth/auth", data.data);
      console.log("data.data.body.user", data.data.body.user);
      console.log("data.data.body.token", data.data.body.token);
      dispath(saveUser(data.data.body.user));
      dispath(toggleAuth());
      document.cookie = "token=" + data.data.body.token + ";max-age=3600"
    } catch (e) {
      deleteCookie("token");
      console.error("plus token was deleted", e);
    }
  };
};
