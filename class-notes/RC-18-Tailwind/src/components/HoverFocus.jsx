import React from "react";

const HoverFocus = () => {
  return (
    <div>
      <h3 className=" text-center bg-purple-400 mt-3 py-3">
        {" "}
        Hover And Focus - Peer Özelliği
      </h3>
      <p>Hover Özelliği bolca kullanilmiş hali :)</p>
      <button className="bg-rose-500 px-16 py-4 rounded-tr-2xl m-4 text-xl text-white hover:drop-shadow-2xl  hover:border-2 hover:border-gray-400 hover:bg-rose-300">
        Save
      </button>

      <p>Focus Özelliği</p>
      <input
        type="text"
        className="border-2 rounded-2xl text-xl ml-2 text-center focus:outline-rose-500 focus:bg-slate-400"
      />
    </div>
  );
};

export default HoverFocus;
