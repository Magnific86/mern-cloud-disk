import axios from "axios";
import { toast } from "react-toastify";

export const signInFunc = async (email: string, password: string) => {
  try {
    const data = await axios.post("http://localhost:5000/api/auth/signin", {
      email,
      password,
    });
    console.log("registration was successfully", data.data);
  } catch (e) {
    toast.error(e.response.data.message);
    console.error(e);
  }
};
