import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/Main";
import Home from "../pages/Home/Index";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shoppost",
        //element: < Post/>,ahsfasfuhuh
      },
    ],
  },

]);

export default router;