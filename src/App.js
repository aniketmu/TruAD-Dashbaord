import logo from './logo.svg';
import './App.css';
import Dashhboard from './Components/Dashhboard';
import DashBoardContainer from './Components/DashBoardContainer';
import MaterialManagment from './Components/MaterialManagment';
import LoginContainer from '../src/Components/LoginFolder/LoginContainer'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginContainer />,
    
  },
  
  {
    path: "/dashboard",
    element: <DashBoardContainer />,
    children:[
      {
        path:"/dashboard/",
        element:<Dashhboard/>
      },
      {
        path:"/dashboard/material/",
        element:<MaterialManagment/>
      }

    ]
   
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard/>,
  //   children: [
  //     {
  //       path: "/dashboard/",
  //       element: <DashboardData />
  //     },
  //     {
  //       path :"/dashboard/orders/",
  //       element:<ProductsCom/>
  //     },
  //     {
  //       path :"/dashboard/customer/",
  //       element:<UsersCom/>
  //     },
  //     {
  //       path :"/dashboard/reports/",
  //       element:<DashboardData/>
  //     },
  //     {
  //       path:"/dashboard/productList/",
  //       element:<ProductsList/>
  //     }
     
      
      
  //   ]
    
  // }
])

function App() {
  
  return (
<RouterProvider router={router}></RouterProvider>
  );
}

export default App;
