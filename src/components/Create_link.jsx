import { useParams } from "react-router-dom";
import axios from "../config/axios.js";
import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

const Create_link = ({ categories }) => {
  const { id } = useParams(); // linkify Id
  const [on, setOn] = useState(false);
  // Form Values
  const [selectedValue, setSelectedValue] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    try {
      axios.post(`/api/work/link/create/${id}`, {
        description,
        link,
        header: selectedValue,
      });
      setOn(false);
    } catch (error) {
      console.log(
        `Something went wrong while trying to create new link:  ${error.message}`
      );
    }
  };

  const categoryOptions = categories.map((item) => ({
    value: item._id,
    label: item.category,
  }));

  return (
    <div className="w-full h-full flex justify-end md:items-end p-4">
      {on && (
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md bg-white shadow-xl rounded-lg flex flex-col p-6 space-y-4"
        >
          <CreatableSelect
            isClearable
            options={categoryOptions}
            onChange={(selectedOption) =>
              setSelectedValue(selectedOption ? selectedOption.value : "")
            }
          />

          <textarea
            className="border rounded-md p-2 w-full"
            name="description"
            placeholder="Write a description..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>

          <input
            type="text"
            name="link"
            placeholder="Paste link here"
            className="border rounded-md p-2 w-full"
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
