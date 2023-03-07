import { FC } from "react";
import { MyLabel } from "../components/MyLabel";

export const SignIn: FC = () => {
  return (
    <form className="w-1/3 flex mx-auto justify-center items-center flex-col bg-teal-900 border border-purple-800 rounded-2xl">
      <h1>Sign In</h1>
      <MyLabel text="" />
      <input
        type="text"
        placeholder=""
        className="bg-transparent border-b mb-4 border-teal-400 text-3xl py-4 px-6 outline-none"
      />
      <MyLabel text="" />
      <input
        type="text"
        placeholder=""
        className="bg-transparent border-b mb-4 border-teal-400 text-3xl py-4 px-6 outline-none"
      />
      <MyLabel text="" />
      <input
        type="text"
        placeholder=""
        className="bg-transparent border-b mb-4 border-teal-400 text-3xl py-4 px-6 outline-none"
      />
      <MyLabel text="" />
      <input
        type="text"
        placeholder=""
        className="bg-transparent border-b mb-4 border-teal-400 text-3xl py-4 px-6 outline-none"
      />
      <button className="bg-purple-800 text-teal-400 px-12 py-4 rounded-full my-6 text-4xl text-center">
        Sign In
      </button>
    </form>
  );
};
