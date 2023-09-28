import React from "react";
import { Outlet, useRoutes } from "react-router-dom"
import NotFound from "./NotFound";
import Home from "./Home";
import Users from "./Users";
import User from "./User";
    

export default function Routes() {
    const routes = useRoutes([
        {
            path:'/',
            element: <Home/>
        },
        {
            path: '/users',
            children:[
                {
                    path:'',
                    element: <Users/>
                },
                {
                    path:'id',
                    element:<User/>
                }
            ]
        },
        {
            path: '*',
            element: <NotFound/>
        },
        {
            path:'/TodoList',
            element: <>TodoList</>
        }
    ])
    return routes;
}