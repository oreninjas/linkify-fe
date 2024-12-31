import { useState } from "react";
import Create_linkify from "./Create_linkify";

const Create_Button = () => {
  const [isOn, setIsOn] = useState(false);

  if (isOn) {
    return <Create_linkify />;
  } else {
    return (
      <>
        <div
          onClick={() => setIsOn(true)}
          className="create-linkify cursor-pointer w-full sm:w-52 h-52 shadow-lg flex justify-center items-center bg-gray-100 rounded-lg hover:shadow-xl hover:scale-105 transition-transform"
        >
          <img src="/images/plus-svg.svg" alt="button" className="w-16 h-16" />
        </div>
      </>
    );
  }
};

export default Create_Button;
