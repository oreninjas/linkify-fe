import { useEffect, useState } from "react";
import axios from "../config/axios.js";
import { useNavigate, useParams } from "react-router-dom";
import Links from "../components/Links.jsx";
import Create_link from "../components/Create_link.jsx";
import Loading from "../components/Loading.jsx";

const LinkifyPage = () => {
  const { id } = useParams();
  const [responseData, setResponseData] = useState({ categories: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchFunction = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`/api/linkify/fetch/${id}`);
      console.log(res.data);
      setResponseData(res.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      navigate("/");
    }
  };

  useEffect(() => {
    fetchFunction();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-screen md:grid md:grid-cols-3">
      <div className="left hidden md:block w-full h-full"></div>
      <div className="mid w-full h-full flex flex-col items-center justify-center gap-5 p-5 md:p-16 bg-green-300 overflow-y-auto">
        {responseData && responseData.categories?.length > 0 ? (
          responseData.categories.map((item) => (
            <Links
              onClick={() => fetchLinks(item._id)}
              key={item._id}
              header={item.header}
              description={item.description}
              link={item.link}
            />
          ))
        ) : (
          <p>Create your first Link.</p>
        )}
        {error && <p>{error}</p>}
      </div>
      <div className="end hidden md:block p-12">
        {responseData && <Create_link categories={responseData.categories} />}
      </div>
    </div>
  );
};

export default LinkifyPage;
