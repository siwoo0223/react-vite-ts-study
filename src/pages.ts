import { lazy } from "react";
import { ComponentType } from "react";

interface PagesType {
  HOME: ComponentType<any>;
  NOT_FOUND: ComponentType<any>;
  LOGIN: ComponentType<any>;
  REGISTER: ComponentType<any>;
}

export const Pages: PagesType = {
  HOME: lazy(() => import("./pages/home")),
  NOT_FOUND: lazy(() => import("./pages/404")),
  LOGIN: lazy(() => import("./pages/login/login")),
  REGISTER: lazy(() => import("./pages/register/register")),
};
