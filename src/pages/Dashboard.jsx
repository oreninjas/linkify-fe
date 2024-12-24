import { useEffect } from "react";
import axios from "../config/axios.js";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/auth/protected")
      .catch(() => {
        navigate("/");
      });
  }, []);

  return (
    <div>
      <h2>Dashboard page</h2>
    </div>
  );
};

export default Dashboard;
