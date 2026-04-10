import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

export default function loading() {
  return (
    <>
      <div className="bg-blue-200 h-screen flex items-center justify-center ">
        <MagnifyingGlass
          visible={true}
          height="200"
          width="200"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    </>
  );
}
