import { createBrowserRouter } from "react-router-dom";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Account from "../pages/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "registration",
    element: <Registration />,
  },
  {
    path: "account",
    element: <Account />,
  },
  {
    path: "login",
    element: <Registration />,
  },
]); 

export default router;
