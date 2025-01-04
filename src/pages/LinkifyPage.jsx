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
    <div className="w-full h-screen md:grid md:grid-cols-3">
      <div className="hidden md:block w-full h-full"></div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-5 md:p-16">
        <Links />
        <Links />
        <Links />
      </div>
      <div className="hidden md:block"></div>
    </div>
  );
};

export default LinkifyPage;
