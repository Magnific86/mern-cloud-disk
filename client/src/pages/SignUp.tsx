import { FC, FormEvent, useRef, useState } from "react";
import { signUpFunc } from "../actions/signUpFunc";
import { MyLabel } from "../components/MyLabel";

export const SignUp: FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passRef.current?.value;
    console.log(email, password);

    if (email && password) {
      await signUpFunc(email, password);
    } else {
      setError("Fill in all fields...");
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-1/3 flex mx-auto justify-center items-center flex-col bg-teal-900 border border-purple-800 rounded-2xl"
    >
      {error && <h1 className="text-4xl text-red-500 text-center">{error}</h1>}
      <MyLabel text="Email" />
      <input
        ref={emailRef}
        type="email"
        placeholder="enter email here..."
        className="bg-transparent border-b mb-4 border-teal-400 text-3xl py-4 px-6 outline-none"
      />
      <MyLabel text="Password" />
      <input
        ref={passRef}
        type="text"
        placeholder="enter password here..."
        className="bg-transparent border-b mb-4 border-teal-400 text-3xl py-4 px-6 outline-none"
      />
      <button className="bg-purple-800 text-teal-400 px-12 py-4 rounded-full my-6 text-4xl text-center">
        Sign Up
      </button>
    </form>
  );
};
