const Card = ({ title, description }) => {
  return (
    <div className="flex flex-col w-full md:w-1/4 h-52 p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform cursor-pointer">
      <h3 class="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p class="text-gray-600 text-medium">{description}</p>
    </div>
  );
};

export default Card;
