import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
  path: string;
  // component: React.ComponentType;
  // component: React.ReactNode;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

export const publicRoutes: IRoute[] = [
  // { path: RouteNames.LOGIN, exact: true, component: Login },
  { path: RouteNames.LOGIN, exact: true },
];

export const privateRoutes: IRoute[] = [
  // { path: RouteNames.EVENT, exact: true, component: Event },
  { path: RouteNames.EVENT, exact: true },
];
