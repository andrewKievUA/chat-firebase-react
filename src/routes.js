import {LOGIN_ROUTE,CHAT_ROUTE} from "./utils/const";
import Login from "./components/Login";
import Chats from "./components/Chats";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chats
    }
]