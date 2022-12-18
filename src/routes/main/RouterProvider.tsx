import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../../layout";
import { ErrorPage } from "../../pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [{ path: "/sample", element: <div>Sample page within main layout</div> }],
    },
  ],
  { basename: "/" }
);

export const MainRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default MainRouterProvider;
