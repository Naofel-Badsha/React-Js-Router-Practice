import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";

import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Users from "../Pages/Users/Users";

import DashboardLayout from "../Layouts/DashboardLayout";
import MainDashboard from "../Pages/DashboardAllPages/MainDashboard/MainDashboard";
import ReceivedOrder from "../Pages/DashboardAllPages/ReceivedOrder/ReceivedOrder";
import AdminOnly from "../Pages/DashboardAllPages/AdminOnly/AdminOnly";

import Logout from "../Pages/DashboardAllPages/Logout/Logout";
import Error from "../Components/ErrorPage404/Error";
import { Suspense } from "react";
import Posts from "../Pages/Posts/Posts";
import UserDetails from "../Pages/Users/UserDetails";
import UpdateProduct from "../Pages/DashboardAllPages/UpdateProduct/UpdateProduct";
import PostDetails from "../Pages/Posts/PostDetails";
import Home from "../Pages/Home/Home";
import Products from "../Pages/DashboardAllPages/Products/Products";
import AddProduct from "../Pages/DashboardAllPages/AddProduct/AddProduct";



const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "Services",
        element: <Services></Services>,
      },
      // {
      //   path: "Blogs",
      //   element: <Blogs></Blogs>,
      // },
      {
        path: "ContactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "Users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      //----------Daynamic-------Routes----------
      {
        path: "users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },

      {
        path: "Posts",
        element: (
          <Suspense fallback={<span>Loading....?</span>}>
            <Posts postsPromise={postsPromise}></Posts>
          </Suspense>
        ),
      },
      {
        path: "posts/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <MainDashboard></MainDashboard>,
      },
      {
        path: "/dashboard/products",
        element: <Products></Products>,
      },
      {
        path: "/dashboard/recivedOrder",
        element: <ReceivedOrder></ReceivedOrder>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/updateProduct",
        element: <UpdateProduct></UpdateProduct>,
      },
      // {
      //   path: "/dashboard/",
      //   element: ,
      // },
      {
        path: "/dashboard/adminOnly",
        element: <AdminOnly></AdminOnly>,
      },
      // {
      //   path: "/dashboard/",
      //   element: <,
      // },
      // {
      //   path: "/dashboard/",
      //   element: ,
      // },
      {
        path: "/dashboard/logout",
        element: <Logout></Logout>,
      },
    ],
  },
]);

export default router;