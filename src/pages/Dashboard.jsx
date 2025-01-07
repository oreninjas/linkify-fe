import { useEffect, useState } from "react";
import axios from "../config/axios.js";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card.jsx";
import Create_Button from "../components/Create_Button.jsx";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/linkify/userlinkifies")
      .then((res) => {
        setUserData(res.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  return (
    <div className="w-full h-screen">
      {userData && (
        <div className="flex gap-10 p-10 flex-wrap">
          {userData.map((data, index) => (
            <Card
              key={data._id}
              title={data.title}
              description={data.description}
              id={data._id}
            />
          ))}
          <Create_Button />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
