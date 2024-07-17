import React, { useState } from "react";
import Card from "./Card";

const Foreground = () => {
    
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "sky" },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <>
      <div className="fixed z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
