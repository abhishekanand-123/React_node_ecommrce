import { useEffect } from "react";

const AdminAssetsLoader = () => {
  useEffect(() => {
    const scripts = [
      "/admin-assets/vendors/js/vendor.bundle.base.js",
      "/admin-assets/js/off-canvas.js",
      "/admin-assets/js/misc.js",
      "/admin-assets/js/settings.js",
      "/admin-assets/js/todolist.js",
    ];

    scripts.forEach((src) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        document.body.appendChild(script);
      }
    });
  }, []);

  return null;
};

export default AdminAssetsLoader;