import { useEffect } from "react";
import axios from "../config/axios.js";
import { useParams } from "react-router-dom";
import Links from "../components/Links.jsx";

const LinkifyPage = () => {
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/api/linkify/fetch/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full h-screen p-5 flex items-center justify-center">
      <div className="flex flex-wrap gap-5 justify-center">
        {/* Multiple Links components */}
        <Links />
        <Links />
        <Links />
        <Links />
      </div>
    </div>
  );
};

export default LinkifyPage;
