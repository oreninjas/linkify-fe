import axios from "axios";
import { useEffect } from "react";

const Card = () => {
  useEffect(() => {
    const response = axios({
      method: "get",
      baseURL: "http://localhost:3000/api/linkify/userlinkifies",
      withCredentials: true,
    });
    console.log(response);
  }, []);

  return (
    <div className="w-60 h-72 rounded-[20px] bg-zinc-900/50 text-white">
      {/* 
        - image 50% rounded
        - Title
        - Description
        - Footer:
            Published
            Private

        ** If nothing found then show a p tag
        */}
    </div>
  );
};

export default Card;
