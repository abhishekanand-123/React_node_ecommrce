// import { Outlet } from "react-router-dom";
// import AdminAssetsLoader from "../AdminAssetsLoader";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// const AdminLayout = () => {
//   return (
//     <>
//       <AdminAssetsLoader />

//       <div className="container-scroller">
//         <Navbar />

//         <div className="container-fluid page-body-wrapper">
//           <Sidebar />

//           <div className="main-panel">
//             <div className="content-wrapper">
//               <Outlet />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminLayout;


import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AdminAssetsLoader from "../AdminAssetsLoader";

const AdminLayout = () => {
  return (
    <>
      <AdminAssetsLoader />

      <div className="container-scroller">
        <Navbar />

        <div className="container-fluid page-body-wrapper">
          <Sidebar />

          <div className="main-panel">
            <div className="content-wrapper">
              <Outlet /> {/* ✅ pages yahan render honge */}
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;