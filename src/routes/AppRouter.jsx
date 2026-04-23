import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import EventDetailsPage from '../pages/EventDetailsPage'
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import CreateEventPage from "../pages/CreateEventPage";
import MyEventsPage from "../pages/MyEventsPage";
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'events/:id',
        element: <EventDetailsPage />,
      },
      { path: "signin", element: <SignInPage /> },
{ path: "signup", element: <SignUpPage /> },
{ path: "create", element: <CreateEventPage /> },
{
        path: "my-events",
        element: <MyEventsPage />,
      },
    ],
  },
])

export default router