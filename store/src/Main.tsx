import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, defer, RouterProvider} from "react-router-dom";

import {Error} from "./pages/Error";
import {Cart} from "./pages/Cart";
import {Product} from "./pages/Product";
import {Catalog} from "./pages/Catalog";
import {FAQ} from "./pages/FAQ";
import {HeaderHeroLayout} from "./layout/HeaderHero.layout";
import axios from "axios";
import {PREFIX} from "./helpers/API";
import App from "./App";

import './index.css';


const MainPage = lazy(() => import('./pages/MainPage'));

const router = createBrowserRouter([

    {
        path: '/',
        element: <HeaderHeroLayout/>,
        children: [
            {
                path: '/',
                element: <Suspense fallback={<>Загрузка... </>}><App/></Suspense>
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
                element: <Product/>,
                errorElement: <>Ошибка</>,
                loader: async ({ params}) => {
                    return defer({
                        data: axios.get(`${PREFIX}/api/${params.id}`).then(data => data)
                    });
                }
            }
        ]
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
