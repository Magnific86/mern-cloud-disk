import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { authFunc } from "./actions/authFunc";
import { MyLayout } from "./layout/MyLayout";
import { MainPage } from "./pages/MainPage";
import { PersonalCabinet } from "./pages/PersonalCabinet";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { useAppDispatch } from "./store/storeHooks";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authFunc());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MyLayout />}>
        <Route index element={<MainPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="personalCabinet" element={<PersonalCabinet />} />
      </Route>
    </Routes>
  );
};
