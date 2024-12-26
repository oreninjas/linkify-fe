import { useNavigate } from "react-router-dom";

const Card = ({ title, description, isPublished }) => {
  //   const navigate = useNavigate();

  const handleCardClick = () => {
    if (linkifyId) {
      navigate(`/linkify/${linkifyId}`);
    }
  };

  return (
    <div
      className="w-full md:w-1/6 h-1/4 md:h-50 bg-zinc-900/50 text-white p-4 cursor-pointer rounded"
      onClick={handleCardClick}
    >
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm mt-2 text-gray-400">{description}</p>
      </div>
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <span>{isPublished ? "Published" : "Private"}</span>
      </div>
    </div>
  );
};

export default Card;
