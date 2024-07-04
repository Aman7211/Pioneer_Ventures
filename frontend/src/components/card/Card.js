import { useState } from "react";

export default function Card({ data }) {
  const [data1, setData1] = useState(data);

  return (
    <div className="flex flex-wrap justify-center gap-4 ">
      {data1.map((item, index) => (
        <div
          key={index}
          className="group relative w-full max-w-[350px] overflow-hidden rounded-lg shadow-lg "
        >
          <img
            src={item.image || "/placeholder.svg"}
            alt="Card image"
            width={250}
            height={200}
            className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-2xl font-bold text-white">
              {item.heading || "Default Title"}
            </h3>
            <p className="text-lg my-3 text-white">
              {item.paragraph || "Default description goes here."}
            </p>
          </div>
        </div>
       
      ))}
    
    </div>
  );
}
