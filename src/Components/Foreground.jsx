import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const containerRef = useRef(null);

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
    <div
      ref={containerRef}
      className="fixed z-[3] w-full h-full flex gap-10 flex-wrap p-5 overflow-hidden"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} containerRef={containerRef} />
      ))}
    </div>
  );
};

export default Foreground;
