import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FiLogIn, FiUserPlus } from "react-icons/fi";

export const MyLayout: FC = () => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col bg-slate-800 text-purple-400 font-mainFont">
      <header className="flex justify-around p-6">
        <NavLink to={"/"} className="text-5xl">
          Cloud Disk
        </NavLink>
        <NavLink to={"/signin"}>
          <FiLogIn style={{ fontSize: 40 }} />
        </NavLink>
        <NavLink to={"/signup"}>
          <FiUserPlus style={{ fontSize: 40 }} />
        </NavLink>
      </header>
    <div className="flex justify-center items-center mt-20">
    <Outlet />
    </div>
    </div>
  );
};
