import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";


import "@smastrom/react-rating/style.css";

const ItemCard = ({ item }) => {
  const { _id, photo, name, categoryName, price, rating, description } = item;
  return (
    <div>
      <Zoom>
        <div className=" group bg-gradient-to-r from-blue-400 to-teal-400 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div className="overflow-hidden rounded-md">
            <img
              src={photo}
              alt={name}
              className="w-full h-48 object-cover transition duration-300 transform group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="mt-2 text-white">
            {/* Name */}
            <h2 className="text-3xl font-bold ">{name}</h2>
            {/* description */}
            <div className="mt-2">{description.substring(0, 40)}...</div>
            {/* View Details Button */}
            <div className="mt-4">
              <Link to={`viewDetail/${_id}`}>
                <button className="w-full bg-white text-indigo-500 font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:bg-indigo-600 hover:text-white hover:scale-105">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default ItemCard;
