import axios from "axios";
import { toast } from "react-toastify";

export const signUpFunc = async (email: string, password: string) => {
  try {
    const data = await axios.post("http://localhost:5000/api/auth/signup", {
      email,
      password,
    });
    console.log("login was successfully", data.data);
  } catch (e) {
    toast.error(e.response.data.message);
    console.error(e);
  }
};
