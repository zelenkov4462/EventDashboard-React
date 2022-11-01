import React, { FC } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../router";
import Login from "../pages/Login";
import Event from "../pages/Event";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AppRouter: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector((state) => state.auth);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<Event />} />
      ))}
      <Route path={"*"} element={<Navigate to={RouteNames.EVENT} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<Login />} />
      ))}
      <Route path={"*"} element={<Navigate to={RouteNames.LOGIN} />} />
    </Routes>
  );
};

export default AppRouter;
