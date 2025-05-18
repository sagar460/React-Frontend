import { Link } from "react-router-dom";

function Card() {
  return (
    <Link to="/single-page">
      <div className="gap-3 p-4">
        {/* Product Card 1 */}
        <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img
            className="w-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJOBc888horStIw5v_cpA6OOGG39NMeDgEg&s"
            alt="Product Image"
          />
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800">
              Classic Sneakers
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Comfortable and stylish sneakers perfect for everyday wear.
              Available in multiple colors.
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-black-500">$79.99</span>

              <button className="bg-yellow-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200">
                Edit
              </button>
              <button className="bg-red-700 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200">
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Card;
