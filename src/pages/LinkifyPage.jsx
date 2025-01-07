import { useEffect, useState } from "react";
import axios from "../config/axios.js";
import { useNavigate, useParams } from "react-router-dom";
import Links from "../components/Links.jsx";
import Create_link from "../components/Create_link.jsx";

const LinkifyPage = () => {
  const { id } = useParams();
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();

  const fetchFunction = async () => {
    try {
      const res = await axios.get(`/api/linkify/fetch/${id}`);
      setResponseData(res.data);
    } catch (error) {
      console.log(`Something went wrong while fetching linkify ${error}`);
      navigate("/");
    }
  };

  useEffect(() => {
    fetchFunction();
  }, []);

  return (
    <div className="w-full h-screen md:grid md:grid-cols-3">
      <div className="left hidden md:block w-full h-full"></div>
      <div className="mid w-full h-full flex flex-col items-center justify-center gap-5 p-5 md:p-16 bg-green-300 overflow-y-scroll">
        {responseData &&
          responseData[0].categories.map((item) => (
            <Links
              key={item._id}
              title={item.category}
              description={item.description}
              link={item.link}
            />
          ))}
        {/* <Links /> */}
      </div>
      <div className="end hidden md:block p-10">
        {responseData && (
          <Create_link categories={responseData[0].categories} />
        )}
      </div>
    </div>
  );
};

export default LinkifyPage;
