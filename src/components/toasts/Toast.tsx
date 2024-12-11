"use client";

import React from "react";
import { Bounce, toast } from "react-toastify";

const Toast = () => {
  toast("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  return <></>;
};

export default Toast;
