import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    children: [
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
]);

export default router;