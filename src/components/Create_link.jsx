import { useEffect, useState } from "react";

const Create_link = () => {
  const [on, setOn] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked === true) {
    }
  }, [clicked]);

  return (
    <>
      <div className="w-full h-full md:flex md:items-end md:justify-end">
        {on && (
          <div className="w-full h-1/2 bg-green-300 rounded-lg flex flex-col">
            <select>
              <option value="">Select an option</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="custom">Custom...</option>
            </select>
          </div>
        )}
        <img
          onClick={() => setOn((prev) => !prev)}
          className={`${
            on === true ? "hidden" : ""
          } w-16 hover:scale-105 cursor-pointer`}
          src="/images/add.png"
          alt="add button"
        />
      </div>
    </>
  );
};

export default Create_link;
