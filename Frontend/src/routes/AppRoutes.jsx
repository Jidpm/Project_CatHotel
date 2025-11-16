import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import MainLayout from "../components/layouts/MainLayout";
import Contact from "../pages/Contact";
import RoomsDetailPage from "../pages/RoomsDetailPage";



const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      { index: true, element: <HomePage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/roomtype/:slug", element: <RoomsDetailPage/>},
      { path: "/contact", element: <Contact/>}
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={userRouter} />;
}
