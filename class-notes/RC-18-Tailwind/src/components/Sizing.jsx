import React from "react";

const Sizing = () => {
  return (
    <div>
      <h4 className="text-2xl bg-blue-400 text-center">Spacing and Sizing</h4>
      <p className="text-lg underline text-opacity-60 text-justify capitalize">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laudantium laborum ad atque deserunt in dolorum quis
        quae dolorem? Molestias, consectetur.
      </p>

      <div>
        <p className="bg-yellow-600 mt-5">Margin Padding</p>
        <button className="bg-lime-600 m-4 p-2">Tıkla</button>
        <button className="bg-orange-700 mt-4 ml-6 pl-5 pr-8 pt-3 pb-1">
          Tikla
        </button>
        <button className="bg-blue-400 mx-7 my-10 px-20 py-5">Tikla</button>
      </div>
      <div>
        <p className="bg-yellow-600 mt-5">Border - Border radius</p>
        <button className="bg-lime-600 m-4 p-2 border-[0.5rem] border-red-300 ">
          Tikla
        </button>
        <button className="bg-slate-500 m-4 p-2 border-[0.5rem] border-blue-200 rounded-2xl">
          Tikla
        </button>
        <button className="bg-yellow-200 m-4 p-2  border-[0.5rem] border-blue-200 rounded-br-2xl">
          Tikla
        </button>
        <button className="bg-yellow-200 m-4 p-2  border-[0.5rem] border-blue-200 rounded-[50%] hover:bg-slate-500">
          Tikla
        </button>
      </div>
    </div>
  );
};

export default Sizing;
