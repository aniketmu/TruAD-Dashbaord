
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
import Invoices from './Components/InvoicesFiles/Invoices';


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
      },
      {
        path:"/dashboard/invoices",
        element:<Invoices/>
      }

    ]
   
  }
 
])

function App() {
  
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;