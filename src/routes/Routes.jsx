import { createBrowserRouter } from 'react-router-dom';
import LatestVisas from '../components/LatestVisas';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import AddVisa from '../pages/AddVisa';
import AllVisas from '../pages/AllVisas';
import ErrorElement from '../pages/ErrorElement';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyAddedVisas from '../pages/MyAddedVisas';
import MyProfile from '../pages/MyProfile';
import MyVisaApplication from '../pages/MyVisaApplication';
import ProfileUpdate from '../pages/ProfileUpdate';
import Register from '../pages/Register';
import UpdateVisa from '../pages/UpdateVisa';
import VisaDetails from '../pages/VisaDetails';
import PrivetRoute from './PrivetRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/allVisas',
                element: <AllVisas />,
                loader: () => fetch('http://localhost:5000/api/visas')
            },
            {
                path: '/addVisa',
                element: (
                    <PrivetRoute>
                        <AddVisa />
                    </PrivetRoute>
                )
            },
            {
                path: '/visaDetails/:id',
                element: (
                    <PrivetRoute>
                        <VisaDetails />
                    </PrivetRoute>
                )
            },
            {
                path: '/latestVisas',
                element: <LatestVisas />
            },

            {
                path: '/myAddedVisas',
                element: (
                    <PrivetRoute>
                        <MyAddedVisas />
                    </PrivetRoute>
                )
            },
            {
                path: '/myVisaApplication',
                element: (
                    <PrivetRoute>
                        <MyVisaApplication />
                    </PrivetRoute>
                )
            },
            {
                path: '/updateVisa/:id',
                element: <UpdateVisa />,
                loader: ({params}) => fetch(`http://localhost:5000/visas/${params.id}`)
            },

            {
                path: '/myProfile',
                element: (
                    <PrivetRoute>
                        <MyProfile />
                    </PrivetRoute>
                )
            },
            {
                path: '/auth',
                element: <AuthLayout />,
                children: [
                    {
                        path: '/auth/login',
                        element: <Login />
                    },
                    {
                        path: '/auth/register',
                        element: <Register />
                    },
                    {
                        path: '/auth/profileUpdate',
                        element: <ProfileUpdate />
                    }
                ]
            }
        ]
    }
]);

export default routes;
