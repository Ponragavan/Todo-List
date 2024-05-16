import React from "react";

const BackDrop = (props) => {
  return (
    <>
      <div onClick={props.onClick} className="absolute top-0 left-0 w-full h-full bg-stone-900 opacity-70 z-10"></div>
      <div className="absolute flex flex-col h-3/4 w-1/2 max-md:w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-400 z-20 rounded-2xl">{props.children}</div>
    </>
  );
};

export default BackDrop;
