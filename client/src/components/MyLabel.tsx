import { FC } from "react";

interface MyLabelProps {
  text: string;
}

export const MyLabel: FC<MyLabelProps> = ({ text }) => {
  return <label className="text-4xl py-6 px-4">{text}</label>;
};
