import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toastify() {
  // toast("Wow so easy!");
  toast.success("Sucessfully Login");
  return (
    <div>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer
        position="top-center"
        autoClose={900}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Toastify;
