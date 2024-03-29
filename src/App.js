import "./App.css";
import Dashhboard from "./Components/Dashboard/Dashhboard.js";
import DashBoardContainer from "./Components/Dashboard/DashBoardContainer";
import MaterialManagment from "./Components/MaterialManagmentFolder/MaterialManagment";
import LoginContainer from "../src/Components/LoginFolder/LoginContainer";
import DataReport from "./Components/DataReport";
import HomePage from "./Components/HomePage";
import PlacePromotion from "./Components/PlacePromotion";
import PopularPicks from "./Components/Popular Picks/PopularPicks.js";
import VideoClip from "./Components/VideoClip";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ActionPage from "./Components/MaterialManagmentFolder/ActionPage";
import Invoices from "./Components/InvoicesFiles/Invoices";
import { MyContextProvider } from "./MyContext";
import RaiseTicket from "./Components/MaterialManagmentFolder/Raise Ticket/RaiseTicket.js";
import VerifyOTP from "./Components/LoginFolder/ForgotPassword/VerifyOTP.js";
import ConfirmNewPass from './Components/LoginFolder/ForgotPassword/ConfirmNewPass.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginContainer />,

  },
  {
    path: "/verifyotp",
    element: <VerifyOTP />
  },
  {
    path: "/ConfirmNewPass",
    element: <ConfirmNewPass />
  },

  {
    path: "/dashboard",
    element: <DashBoardContainer />,
    children: [
      {
        path: "/dashboard/",
        element: <Dashhboard />,
      },
      {
        path: "/dashboard/material/",
        element: <MaterialManagment />,
      },
      {
        path: "/dashboard/homepage",
        element: <HomePage />,
      },
      {
        path: "/dashboard/popularpicks/",
        element: <PopularPicks />,
      },
      {
        path: "/dashboard/placepromotion",
        element: <PlacePromotion />,
      },
      {
        path: "/dashboard/datareport/",
        element: <DataReport />,
      },

      {
        path: "/dashboard/video",
        element: <VideoClip />,
      },
      {
        path: "/dashboard/actionpage",
        element: <ActionPage />,
        children: [
          {


          }
        ]

      },
      {
        path: "/dashboard/invoices",
        element: <Invoices />,
      },
      {
        path: "/dashboard/raiseticket",
        element: <RaiseTicket />
      }

    ],
  },
]);

function App() {
  return (
    <MyContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </MyContextProvider>
  );
}

export default App;
