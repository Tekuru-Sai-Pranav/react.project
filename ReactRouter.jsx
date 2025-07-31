import { createBrowserRouter } from "react-router-dom";
import Layout from "../crud/Layout";
import CreateStudent from "../crud/CreateStudent";
import ViewAll from "../crud/ViewAll";

export let router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<CreateStudent/>
            },
            {
                path:"/viewAll",
                element:<ViewAll/>
            }
        ]
    }
])