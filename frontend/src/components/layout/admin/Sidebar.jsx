import React from "react";

import logo from "../../../assets/logos/DeckbyteLogoWhite.svg"

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col px-4 py-6 text-white">
        <div className="flex items-center justify-start px-2 ">
          <img className="w-3/4" src={logo} alt="Logo" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
