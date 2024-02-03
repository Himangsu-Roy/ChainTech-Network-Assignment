import { createBrowserRouter } from "react-router-dom";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Account from "../pages/Account";
import Layout from "../layout/Layout";

// Create a BrowserRouter instance using createBrowserRouter from react-router-dom
const router = createBrowserRouter([
  // Define routes configuration
  {
    // Root path configuration
    path: "/",
    // Element to be rendered for this route
    element: <Layout />,
    children: [
      {
        // Child route for login page
        path: "/",
        // Element to be rendered for this route
        element: <Login />,
      },
      {
        // Child route for account page
        path: "account",
        // Element to be rendered for this route
        element: <Account />,
      },
      {
        // Child route for registration page
        path: "registration",
        // Element to be rendered for this route
        element: <Registration />,
      },
    ],
  },
]);

export default router;
