
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ErrorElement from '../pages/ErrorElement';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivetRoute from './PrivetRoute';
import MyProfile from '../pages/MyProfile';
import ProfileUpdate from '../pages/ProfileUpdate';
import AllVisas from '../pages/AllVisas';
import AddVisa from '../pages/AddVisa';
import MyAddedVisas from '../pages/MyAddedVisas';
import MyVisaApplication from '../pages/MyVisaApplication';
import VisaDetails from '../pages/VisaDetails';

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
                path: '/visaDetails',
                element: (
                    <PrivetRoute>
                        <VisaDetails />
                    </PrivetRoute>
                )
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

