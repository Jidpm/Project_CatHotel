import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
// import HomePage from "../pages/";
import ProfilePage from "../pages/ProfilePage";

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // ใช้ App เป็น Layout หลัก
    children: [
      // { path: "", element: <HomePage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={userRouter} />;
}
