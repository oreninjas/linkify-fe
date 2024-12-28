import { useEffect } from "react";
import axios from "../config/axios.js";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background.jsx";
import Baseground from "../components/Baseground.jsx";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/auth/protected").catch(() => {
      navigate("/");
    });
  }, []);

  return (
    <div className="relative w-full h-screen bg-zinc-800 z-[-50]">
      <Background />
      <Baseground />
    </div>
  );
};

export default Dashboard;
