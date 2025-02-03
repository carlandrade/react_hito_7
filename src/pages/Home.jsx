import React, { useState, useEffect, useContext } from "react";
import { getProducts } from "../api/products";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Menú de Pizzas</h1>
      {products.length === 0 ? (
        <p className="text-center">Cargando productos...</p>
      ) : (
        <ul className="list-group">
          {products.map((product) => (
            <li
              key={product.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {product.title} - ${product.price}
              <button
                className="btn btn-success"
                onClick={() => addToCart(product)}
              >
                Añadir al Carrito
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
