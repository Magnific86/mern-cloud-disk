import { ChangeEvent, FC, FormEvent } from "react";
import { MyLabel } from "./MyLabel";

interface EmailPassFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  email: string;
  handleEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  pass: string;
  handlePass: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  btnText: string;
  greetingText: string;
}

export const EmailPassForm: FC<EmailPassFormProps> = ({
  handleSubmit,
  handleEmail,
  handlePass,
  email,
  pass,
  error,
  btnText,
  greetingText,
}) => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col bg-slate-800 text-purple-400 font-mainFont">
      <h1 className="text-center text-5xl p-8">{greetingText}</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-1/3 flex mx-auto justify-center items-center flex-col bg-teal-900 border border-purple-800 rounded-2xl"
      >
        {error && (
          <h1 className="text-4xl text-red-500 text-center">{error}</h1>
        )}
        <MyLabel text="Email" />
        <input
          value={email}
          onChange={(e) => handleEmail(e)}
          type="email"
          placeholder="enter email here..."
          className="bg-transparent border-b mb-4 border-teal-400 text-3xl py-4 px-6 outline-none"
        />
        <MyLabel text="Password" />
        <input
          value={pass}
          onChange={(e) => handlePass(e)}
          type="text"
          placeholder="enter password here..."
          className="bg-transparent border-b mb-4 border-teal-400 text-3xl py-4 px-6 outline-none"
        />
        <button className="bg-purple-800 text-teal-400 px-12 py-4 rounded-full my-6 text-4xl text-center">
          {btnText}
        </button>
      </form>
    </div>
  );
};
