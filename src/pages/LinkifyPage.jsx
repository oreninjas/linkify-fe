import { useEffect, useState } from "react";
import axios from "../config/axios.js";
import { useParams } from "react-router-dom";
import Links from "../components/Links.jsx";
import Create_link from "../components/Create_link.jsx";

const LinkifyPage = () => {
  const { id } = useParams();
  const [responseData, setResponseData] = useState(null);

  const fetchFunction = async () => {
    try {
      const res = await axios.get(`/api/linkify/fetch/${id}`);
      setResponseData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(`Something went wrong while fetching linkify ${error}`);
    }
  };

  useEffect(() => {
    fetchFunction();
  }, []);

  return (
    <div className="w-full h-screen md:grid md:grid-cols-3">
      <div className="left hidden md:block w-full h-full"></div>
      <div className="mid w-full h-full flex flex-col items-center justify-center gap-5 p-5 md:p-16 bg-green-300">
        {responseData &&
          responseData[0].categories.map((item, index) => (
            <Links
              key={index}
              title={item.category}
              description={item.description}
            />
          ))}
        {/* <Links /> */}
      </div>
      <div className="end hidden md:block p-10">
        <Create_link />
      </div>
    </div>
  );
};

export default LinkifyPage;
