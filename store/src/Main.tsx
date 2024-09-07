import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {Error} from "./pages/Error";
import {MainPage} from "./pages/MainPage";
import {Cart} from "./pages/Cart";
import {Catalog} from "./pages/Catalog";
import {FAQ} from "./pages/FAQ";
import {HeaderHeroLayout} from "./layout/HeaderHero.layout";
import {Product} from "./pages/Product";

import './index.css';



const router = createBrowserRouter([

    {
        path: '/',
        element: <HeaderHeroLayout/>,
        children: [
            {
                path: '/',
                element: <MainPage/>
            },
            {
                path: '/catalog',
                element: <Catalog/>
            },
            {
                path: '/faq',
                element: <FAQ/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '*',
                element: <Error/>
            },
            {
                path: '/product/:id',
                element: <Product/>
            },
        ]
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
