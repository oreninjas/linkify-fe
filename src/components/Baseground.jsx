import { useEffect, useState } from "react";
import axios from "../config/axios.js";
import { useNavigate } from "react-router-dom";
import Card from "./Card.jsx";

const Baseground = () => {
  const [linkifies, setLinkifies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/linkify/userlinkifies")
      .then((res) => {
        setLinkifies(res.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  return (
    <div className="h-screen w-full z-[-2] flex items-center justify-center sm:items-start bg-transparent p-10 gap-10 flex-wrap overflow-scroll">
      {linkifies.length > 0 ? (
        linkifies.map((items, key) => {
          return (
            <Card
              key={key}
              title={items.title}
              description={items.description}
              isPublished={items.isPublished}
            />
          );
        })
      ) : (
        <p>There's no data</p>
      )}
    </div>
  );
};

export default Baseground;
