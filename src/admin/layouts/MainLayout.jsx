// import React from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";

// const MainLayout = ({ children }) => {
//   return (
//     <div className="container-scroller">
//       <Navbar />

//       <div className="container-fluid page-body-wrapper">
//         <Sidebar />

//         <div className="main-panel">
//           <div className="content-wrapper">
//             {children}
//           </div>

//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;


import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AdminAssetsLoader from "../AdminAssetsLoader";

const MainLayout = () => {
  return (
    <>
      <AdminAssetsLoader />

      <div className="container-scroller">
        <Navbar />

        <div className="container-fluid page-body-wrapper">
          <Sidebar />

          <div className="main-panel">
            <div className="content-wrapper">
              <Outlet />   {/* ✅ ROUTES RENDER HERE */}
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;