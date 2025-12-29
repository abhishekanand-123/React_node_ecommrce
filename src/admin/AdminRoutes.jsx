import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";

import Dashboard from "./pages/Dashboard";
import FormElements from "./pages/forms/FormElements";
import ChartJs from "./pages/charts/ChartJs";
import FontAwesome from "./pages/icons/FontAwesome";
import Buttons from "./pages/ui-features/Buttons";
import Dropdowns from "./pages/ui-features/Dropdowns";
import Typography from "./pages/ui-features/Typography";
import BasicTables from "./pages/tables/BasicTables";
import Login from "./pages/samples/Login";
import Register from "./pages/samples/Register";
import Error404 from "./pages/samples/Error404";

const AdminRoutes = () => {
  return (
    <Routes>

      {/* AUTH (NO LAYOUT) */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* ADMIN PANEL (WITH LAYOUT) */}
      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="forms" element={<FormElements />} />
        <Route path="charts" element={<ChartJs />} />
        <Route path="icons" element={<FontAwesome />} />
        <Route path="buttons" element={<Buttons />} />
        <Route path="dropdowns" element={<Dropdowns />} />
        <Route path="typography" element={<Typography />} />
        <Route path="tables" element={<BasicTables />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AdminRoutes;
