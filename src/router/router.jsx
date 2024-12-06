import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "../layOut/HomeLayOut";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AuthLayOut from "../layOut/AuthLayOut";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";
import AddEquipment from "../pages/AddEquipment";
import ViewDetail from "../pages/ViewDetail";
import AllEquipments from "../pages/AllEquipments";
import MyEquipments from "../pages/MyEquipments";



const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayOut></HomeLayOut>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/litems')
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/addEquip',
                element: <AddEquipment></AddEquipment>
            },
            {
                path: '/viewDetail/:id',
                element: <ViewDetail></ViewDetail>,
                loader: ({params})=> fetch(`http://localhost:5000/item/${params.id}`)
            },
            // {
            //     path: '/all/viewDetail/:id',
            //     element: <ViewDetail></ViewDetail>,
            //     loader: ({params})=> fetch(`http://localhost:5000/items/${params.id}`)
            // },
            {
                path: '/all',
                element: <AllEquipments></AllEquipments>,
                loader: ()=> fetch('http://localhost:5000/items')
            },
            {
                path: '/myEquip',
                element: <MyEquipments></MyEquipments>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayOut></AuthLayOut>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;