import { useState } from "react";

const Links = ({ title, description, link }) => {
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
        <div className="shadow-lg w-full h-full rounded-b-lg text-start px-10 py-10 bg-[#F5F5F5] gap-2">
          <p>{description}</p>
          <p>
            Link:{" "}
            <a href={link} target="_blank" className="text-blue-500">
              {link}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Links;
