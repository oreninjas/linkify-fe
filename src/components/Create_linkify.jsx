import { useState } from "react";

const Create_linkify = () => {
  const [isOff, setIsOff] = useState(false);
  const stopVisiblity = () => {
    setIsOff(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Hello world!");
  };

  if (isOff == false) {
    return (
      <div
        onClick={stopVisiblity}
        className="absolute w-full h-full left-0 top-0 flex justify-center items-center backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white p-10 md:rounded-lg shadow-2xl font-light scale-95 transition-transform"
        >
          <form onSubmit={() => submitHandler(e)}>
            <input
              className="w-full px-5 py-2 rounded-lg border border-gray-300 shadow-sm focus::ring outline-none"
              type="text"
              name="title"
              placeholder="title"
              autoComplete="off"
              maxLength="50"
              required
            />
            <button
              className="w-full mt-6 text-center py-3 rounded hover:scale-105 transition-transform font-medium hover:bg-zinc-200 hover:font-bold border"
              type="submit"
            >
              continue
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default Create_linkify;
