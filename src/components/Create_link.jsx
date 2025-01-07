import { useParams } from "react-router-dom";
import axios from "../config/axios.js";
import { useState } from "react";

const Create_link = ({ categories }) => {
  const { id } = useParams(); // linkify Id
  const [on, setOn] = useState(false);
  const [isCustom, setIsCustom] = useState(false);
  // form values
  const [description, setDescription] = useState("");
  const [customValue, setCustomValue] = useState(""); // one of form value
  const [link, setLink] = useState("");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value === "custom") {
      setIsCustom(true);
    } else {
      setIsCustom(false);
      setCustomValue("");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("working");

    try {
      axios.post(`/api/work/link/create/${id}`, {
        description,
        link,
        category: customValue,
      });
    } catch (error) {
      console.log(
        `Something went wrong while trying to create new link:  ${error.message}`
      );
    }
  };

  return (
    <div className="w-full h-full flex justify-end md:items-end p-4">
      {on && (
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md bg-white shadow-xl rounded-lg flex flex-col p-6 space-y-4"
        >
          <div className="relative">
            {!isCustom ? (
              <select
                className="border-2 border-gray-300 rounded-md p-2 w-full"
                onChange={handleSelectChange}
                value={customValue}
              >
                <option>Select an option</option>
                {categories &&
                  categories.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.category}
                    </option>
                  ))}
                <option value="custom">Custom...</option>
              </select>
            ) : (
              <input
                type="text"
                className="border-2 border-gray-300 rounded-md p-2 w-full"
                value={customValue}
                onChange={(e) => setCustomValue(e.target.value)}
                placeholder="Enter custom name"
              />
            )}
          </div>

          <textarea
            className="border-2 border-gray-300 rounded-md p-2 w-full"
            name="description"
            placeholder="Write a description..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>

          <input
            type="text"
            name="link"
            placeholder="Paste link here"
            className="border-2 border-gray-300 rounded-md p-2 w-full"
            onChange={(e) => setLink(e.target.value)}
            value={link}
          />

          <input
            type="submit"
            value="Submit"
            className="bg-blue-300 text-white p-2 rounded-md cursor-pointer hover:bg-blue-600 transition duration-300"
          />
        </form>
      )}
      <img
        onClick={() => setOn((prev) => !prev)}
        className={`${
          on ? "hidden" : ""
        } w-16 hover:scale-105 cursor-pointer transition-all duration-300`}
        src="/images/add.png"
        alt="Add button"
      />
    </div>
  );
};

export default Create_link;
