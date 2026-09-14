export default function Card({ image, name, price, onAddToCart }) {
    return (
      <div className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
        <img src={image} alt={name} className="h-48 w-full object-cover rounded-lg" />
        <h3 className="text-lg font-bold mt-2 text-gray-800">{name}</h3>
        <p className="text-blue-600 font-semibold">${price}</p>
        <button onClick={onAddToCart} className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">
          Add to Cart
        </button>
      </div>
    );
  }
  