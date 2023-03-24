import { FC } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import { ImExit } from "react-icons/im";
import deleteCookie from "../actions/deleteCookie";
import { saveUser, toggleAuth } from "../store/reducers/userSlice";
import getCookie from "../actions/getCookie";

export const MyLayout: FC = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log("IS AUTH", isAuth);

  return (
    <div className="container mx-auto min-h-screen flex flex-col bg-slate-800 text-purple-400 font-mainFont">
      <header className="flex justify-between pt-4 px-6">
        <NavLink to={"/"} className="text-5xl">
          Cloud Disk
        </NavLink>

        {!isAuth ? (
          <div className="flex gap-8">
            <NavLink to={"/signin"}>
              <FiLogIn style={{ fontSize: 40 }} />
            </NavLink>
            <NavLink to={"/signup"}>
              <FiUserPlus style={{ fontSize: 40 }} />
            </NavLink>
          </div>
        ) : (
          <div className="flex gap-8">
            <NavLink to={"/personalCabinet"}>
              <FaUserCircle style={{ fontSize: 40 }} />
            </NavLink>
            <ImExit
              onClick={() => {
                console.log("TOKEN COOKIE TO DELETE", getCookie("token"));
                document.cookie =
                  "token=" +
                  getCookie("token") +
                  "expires=Thu, 01 Jan 1970 00:00:00 GMT";
                dispatch(
                  saveUser({
                    email: "",
                    password: "",
                  })
                );
                dispatch(toggleAuth());
                navigate("/");
              }}
              style={{ fontSize: 40 }}
            />
          </div>
        )}
      </header>
      <Outlet />
    </div>
  );
};
