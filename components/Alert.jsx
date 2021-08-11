import React from "react";

export default function Alert(props) {
  return (
    <div
      style={{ display: props.trigger ? "block" : "none" }}
      className="w-52 m-auto mt-20"
    >
      <div className="relative mb-3 bg-red-50 font-bold text-red-600 border border-red-400 px-5 py-3 rounded">
        Traffic Alert
        <div className="absolute z-20 -top-8 -right-5 inline-block">
          <span onClick={props.handleAlert} className="flex h-16 w-16">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-16 w-16 bg-red-600"></span>
          </span>
        </div>
      </div>
      <div className="w-52 rounded border-2 border-red-400 overflow-hidden">
        <img
          className=" transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150"
          src="imgs/vehicle-3.jpeg"
          alt="Car-Alert-Image"
        />
      </div>
    </div>
  );
}
