import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../services/GlobalApi";
import { CartContext } from "../context/CartContext"; // Import CartContext

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const { addToCart } = useContext(CartContext); // Destructure addToCart

  useEffect(() => {
    // Fetch game details based on the ID
    GlobalApi.getGameDetail(id).then((response) => {
      setGame(response.data);
    });
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: game.id,
      name: game.name,
      background_image: game.background_image,
      price: game.price || 59.99, // Assuming a price property or a default value
    });
  };

  return (
    <div className="p-6 dark:bg-black dark:text-white">
      <h1 className="text-4xl font-bold mb-4">{game.name}</h1>
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-[500px] object-cover rounded-lg mb-6"
      />
      <p className="text-lg">{game.description_raw}</p>
      <h2 className="text-2xl mt-4">Rating: {game.rating}</h2>
      <h2 className="text-2xl mt-4">Released: {game.released}</h2>
      <button
        onClick={handleAddToCart}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default GameDetail;
