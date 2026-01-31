import React from "react";
import Not from "../../../public/NotFounddd/404 error.json";
import Lottie from "lottie-react";

export default function NotFound() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Lottie animationData={Not} loop autoplay className="h-full w-full " />
      </div>
    </>
  );
}
