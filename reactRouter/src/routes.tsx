import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Pages/Home/Index"
import { Sobre } from "./Pages/Sobre/Index"
import {Contato } from "./Pages/Contato/Index"
import { Produto } from "./Pages/Produtos/Index"
import { NotFound } from "./Pages/NotFound";

import { Layout } from "./Components/Layout";

const router = createBrowserRouter ([
    {
        element: <Layout/>,
        children: [{
            path:"/",
            element:<Home/>
        },
        {
            path:"/sobre",
            element:<Sobre/>
        },
        {
            path:"/contato",
            element:<Contato/>
        },
        {
            path:"/produto/:id",
            element:<Produto/>
        },
        {
            path:"*",
            element:<NotFound/>
        }
    ]
    }
    
])
export{router};