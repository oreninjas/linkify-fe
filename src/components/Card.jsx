import { useNavigate } from "react-router-dom";

const Card = ({ title, description, id }) => {
  const navigate = useNavigate();
  const openEach = (id) => {
    console.log(id);
    navigate(`/linkify/${id}`);
  };

  return (
    <div
      onClick={() => openEach(id)}
      className="flex flex-col w-full md:w-1/4 h-52 p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform cursor-pointer"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-medium">{description}</p>
    </div>
  );
};

export default Card;
