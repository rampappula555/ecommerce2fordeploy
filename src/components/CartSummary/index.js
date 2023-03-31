import "./index.css";
import { useState } from "react";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartSummary = (props) => {
  const navigate = useNavigate();
  const value = useContext(CartContext);
  const { deletecartList } = value;

  const [isCheckedOut, setIscheckedOut] = useState(false);
  const { cartLength, flag } = props;
  const onClickCheckOut = () => setIscheckedOut(true);
  const onClickContinueShopping = () => {
    deletecartList();
    navigate("/products");
  };
  return (
    <div className="cart-summary-main-container">
      <div>
        <h1 className="totalprice-heading">Order Total: Rs {flag}/-</h1>
        <p>{cartLength} items in cart</p>
        <button className="checkout-button" onClick={onClickCheckOut}>
          Checkout
        </button>
        {isCheckedOut && (
          <div className="checkout-greetings-container">
            <div>
              <img
                src="https://res.cloudinary.com/dndtkpqk5/image/upload/v1664607537/Vector_3_uvgo7n.png"
                alt="img"
                className="checkout-greetings-image"
              />
            </div>
            <p>Ordered Placed</p>
            <button
              onClick={onClickContinueShopping}
              className="shopnow-button"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartSummary;
