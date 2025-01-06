import { useState } from "react";

const Links = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-full text-center justify-center items-center">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`cursor-pointer w-full bg-white shadow-lg ${
          open == false ? "rounded-lg hover:shadow-2xl" : "rounded-t-lg"
        } flex flex-col justify-center items-center p-4 transition-shadow duration-300 ease-in-out`}
      >
        <h2 className="font-medium text-xl text-gray-800 mb-2 text-center md:text-left">
          {title}
        </h2>
      </div>
      {open && (
        <div className="shadow-lg w-full h-full rounded-b-lg p-5">
          {description}
        </div>
      )}
    </div>
  );
};

export default Links;
