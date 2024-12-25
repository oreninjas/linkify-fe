import { useNavigate } from "react-router-dom";

const Card = ({ title, description }) => {
  //   const navigate = useNavigate();

  //   const handleCardClick = () => {
  //     if (linkifyId) {
  //       navigate(`/linkify/${linkifyId}`);
  //     }
  //   };

  return (
    <div
      className="flex-shrink-0 w-60 h-72 rounded-[20px] bg-zinc-900/50 text-white p-4 cursor-pointer hover:bg-zinc-800 transition"
      //   onClick={handleCardClick}
    >
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm mt-2 text-gray-400">{description}</p>
      </div>
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        {/* <span>{isPublished ? "Published" : "Private"}</span> */}
        idk published or no
      </div>
    </div>
  );
};

export default Card;
