import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";

import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Users from "../Pages/Users/Users";

import DashboardLayout from "../Layouts/DashboardLayout";
import MainDashboard from "../Pages/DashboardAllPages/MainDashboard/MainDashboard";
import UserAccountSettings from "../Pages/DashboardAllPages/UserAccountSettings/UserAccountSettings";
import OrdersOrBookings from "../Pages/DashboardAllPages/OrdersOrBookings/OrdersOrBookings";
import MessagesOrNotifications from "../Pages/DashboardAllPages/MessagesOrNotifications/MessagesOrNotifications";
import FilesOrDocuments from "../Pages/DashboardAllPages/FilesOrDocuments/FilesOrDocuments";
import Settings from "../Pages/DashboardAllPages/Settings/Settings";
import AdminOnly from "../Pages/DashboardAllPages/AdminOnly/AdminOnly";
import ReportsOrAnalytics from "../Pages/DashboardAllPages/ReportsOrAnalytics/ReportsOrAnalytics";
import SupportOrHelpCenter from "../Pages/DashboardAllPages/SupportOrHelpCenter/SupportOrHelpCenter";
import Logout from "../Pages/DashboardAllPages/Logout/Logout";
import Error from "../Components/ErrorPage404/Error";
import { Suspense } from "react";
import Posts from "../Pages/Posts/Posts";
import UserDetails from "../Pages/Users/UserDetails";

import PostDetails from "../Pages/Posts/PostDetails";
import Home from "../Pages/Home/Home";



const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())



const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        // errorElement: <Error></Error>,
        children: [
            +
            {
                path: '/',
               element:<Home/>
            },
            {
                path: 'aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'Services',
                element: <Services></Services>
            },
            {
                path: 'Blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'ContactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: 'Users',
                loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
                element: <Users></Users>
            },
            //----------Daynamic-------Routes----------
            {
                path: 'users/:userId',
                loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
                element: <UserDetails></UserDetails>
            },

            {
                path: 'Posts',
                element: <Suspense fallback={<span>Loading....?</span>}>
                    <Posts postsPromise={postsPromise}></Posts>
                </Suspense>
            },
            {
                path: 'posts/:postId',
                loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
                element: <PostDetails></PostDetails>
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'mainDashboard',
                element: <MainDashboard></MainDashboard>
            },
            {
                path: 'userAccountSettings',
                element: <UserAccountSettings></UserAccountSettings>
            },
            {
                path: 'ordersOrBookings',
                element: <OrdersOrBookings></OrdersOrBookings>
            },
            {
                path: 'messagesOrNotifications',
                element: <MessagesOrNotifications></MessagesOrNotifications>
            },
            {
                path: 'filesOrDocuments',
                element: <FilesOrDocuments></FilesOrDocuments>
            },
            {
                path: 'settings',
                element: <Settings></Settings>
            },
            {
                path: 'adminOnly',
                element: <AdminOnly></AdminOnly>
            },
            {
                path: 'reportsOrAnalytics',
                element: <ReportsOrAnalytics></ReportsOrAnalytics>
            },
            {
                path: 'supportOrHelpCenter',
                element: <SupportOrHelpCenter></SupportOrHelpCenter>
            },
            {
                path: 'logout',
                element: <Logout></Logout>
            },
        ],
    },
])

export default router;