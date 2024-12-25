import { useEffect, useState } from "react";
import axios from "../config/axios.js";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background.jsx";
import Card from "../components/Card.jsx";

const Dashboard = () => {
  const [linkifies, setLinkifies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/auth/protected").catch(() => {
      navigate("/");
    });

    const linkifies = axios
      .get("/api/linkify/userlinkifies")
      .then((res) => {
        console.log(res);
        setLinkifies(res.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <div>
        {linkifies.length > 0 ? (
          linkifies.map((items, key) => {
            return <Card title={items.title} description={items.description} />;
          })
        ) : (
          <p>There's no data</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
