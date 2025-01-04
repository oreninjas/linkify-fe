import { useState } from "react";

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full text-center justify-center items-center">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer w-full md:w-4/5 lg:w-1/3 xl:w-1/4 bg-white shadow-lg flex flex-col justify-center items-center p-6 rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      >
        <h2 className="font-semibold text-2xl text-gray-800 mb-2 text-center md:text-left">
          Management
        </h2>
      </div>
      {open && <div>Hello world</div>}
    </div>
  );
};

export default Links;
