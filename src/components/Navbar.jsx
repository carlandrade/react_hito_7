import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const token = localStorage.getItem("isAuthenticated");

  return (
    <nav className="navbar navbar-light bg-light px-3">
      <ul className="nav">
        <li className="nav-item me-3">
          <Link to="/">🍕 Home</Link>
        </li>
        {token ? (
          <>
            <li className="nav-item me-3">
              <Link to="/profile">🔓 Profile</Link>
            </li>
            <li className="nav-item me-3">
              <Link to="/cart">🛒 Carrito ({cart.length})</Link>
            </li>
            <li className="nav-item me-3">
              <button
                onClick={() => localStorage.removeItem("isAuthenticated")}
              >
                🔒 Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item me-3">
              <Link to="/login">🔐 Login</Link>
            </li>
            <li className="nav-item me-3">
              <Link to="/register">🔐 Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
