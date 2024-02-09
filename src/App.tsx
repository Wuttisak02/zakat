import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Fragment } from "react";
import Root from "./routes/Root";
import AccountInfoPage from "./views/AccountInfoPage";
import CustomerInfoPage from "./views/CustomerInfoPage";
import ReportInfoPage from "./views/ReportInfoPage";
import IntegrationInfoPage from "./views/IntegrationInfoPage";
import TableBasic from "./list/TableBasic";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<Root />}>
        <Route path="/TableBasic" element={<TableBasic />} />
        <Route path="/accountInfo" element={<AccountInfoPage />}></Route>
        <Route path="/customerInfo" element={<CustomerInfoPage />}></Route>
        <Route path="/reportInfo" element={<ReportInfoPage />}></Route>
        <Route
          path="/integrationInfo"
          element={<IntegrationInfoPage />}
        ></Route>
      </Route>
    </Fragment>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
