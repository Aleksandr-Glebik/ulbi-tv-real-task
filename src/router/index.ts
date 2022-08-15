import React from "react"
import Login from "../pages/Login"
import Event from "../pages/Event"

export interface IRoute {
    path: string;
    element: React.ElementType;
}

export enum RouterNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RouterNames.LOGIN, element: Login},
]
export const privateRoutes: IRoute[] = [
    {path: RouterNames.EVENT, element: Event},
]