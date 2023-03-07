import { Routes, Route } from "react-router-dom";
import { MyLayout } from "./layout/MyLayout";
import { MainPage } from "./pages/MainPage";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MyLayout />}>
        <Route index element={<MainPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
