import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h1>🛒 Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((product, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                {product.title} - ${product.price}
              </li>
            ))}
          </ul>
          <button className="btn btn-danger mt-3" onClick={clearCart}>
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
