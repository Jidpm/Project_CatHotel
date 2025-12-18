import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import MainLayout from "../components/layouts/MainLayout";
import RoomsDetailPage from "../pages/RoomsDetailPage";
import ContactPage from "../pages/ContactPage";

import BookingSuccess from "../pages/BookingSuccessPage";
import { BookingDialog } from "../pages/BookingDialog";



const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      { index: true, element: <HomePage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/roomtype/:slug", element: <RoomsDetailPage/>},
      { path: "/contact", element: <ContactPage/>},
      { path: "/booking", element: <BookingDialog/>}, 
      { path: "/booking-success", element: <BookingSuccess/>},   
    ],
  },
]);
//protect 
export default function AppRoutes() {
  return <RouterProvider router={userRouter} />;
}
