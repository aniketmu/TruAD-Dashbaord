import logo from './logo.svg';
import './App.css';
import Dashhboard from './Components/Dashhboard';
import DashBoardContainer from './Components/DashBoardContainer';
import MaterialManagment from './Components/MaterialManagmentFolder/MaterialManagment';
import LoginContainer from '../src/Components/LoginFolder/LoginContainer'
import DataReport from './Components/DataReport';
import HomePage from './Components/HomePage';
import PlacePromotion from './Components/PlacePromotion';
import PopularPicks from './Components/PopularPicks';
import VideoClip from './Components/VideoClip';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ActionPage from './Components/MaterialManagmentFolder/ActionPage';


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
      },
      {
        path:"/dashboard/homepage",
        element:<HomePage/>
      },
      {
        path:"/dashboard/popularpicks/",
        element:<PopularPicks/>
      },
      {
        path:"/dashboard/placepromotion",
        element:<PlacePromotion/>
      },
      {
        path:"/dashboard/datareport/",
        element:<DataReport/>
      },

      {
        path: "/dashboard/video",
        element: <VideoClip />,
      },
      {
        path:"/dashboard/actionpage",
        element :<ActionPage/>
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