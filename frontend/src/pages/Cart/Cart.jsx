import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [promoCode, setPromoCode] = useState("");

  const coupons = [
    { code: "SAVE10", discount: 0.1, description: "10% off your order" },
    { code: "FREESHIP", discount: 3, description: "Free shipping" },
    { code: "MEAL15", discount: 15, description: "$15 off orders over $50" },
  ];

  const applyCoupon = (coupon) => {
    if (
      getTotalCartAmount() >= 50 ||
      (coupon.code !== "MEAL15")
    ) {
      setAppliedCoupon(coupon);
      setPromoCode(coupon.code);
    } else {
      alert("MEAL15 coupon requires a minimum order of $50");
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setPromoCode("");
  };

  const calculateDiscount = () => {
    if (!appliedCoupon) return 0;
    if (appliedCoupon.code === "FREESHIP") return 3;
    if (appliedCoupon.code === "MEAL15") return 15;
    return appliedCoupon.discount * getTotalCartAmount();
  };

  const calculateTotal = () => {
    const subtotal = getTotalCartAmount();
    const shippingFee = subtotal === 0 ? 0 : 3;
    const discount = calculateDiscount();
    return subtotal + shippingFee - discount;
  };

  return (
    <motion.div
      className="cart"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-container">
        <div className="cart-items">
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <motion.div
                  key={item._id}
                  className="cart-item"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img src={url + "/images/" + item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <p>Canteen  :  <b>{item.canteen.toUpperCase()}</b></p>
                    <div className="cart-item-quantity">
                      <span>Qty: {cartItems[item._id]}</span>
                      <button onClick={() => removeFromCart(item._id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="cart-item-total">
                    ${item.price * cartItems[item._id]}
                  </p>
                </motion.div>
              );
            }
          })}
        </div>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="cart-summary-details">
            <div className="cart-summary-item">
              <span>Subtotal</span>
              <span>${getTotalCartAmount()}</span>
            </div>
            <div className="cart-summary-item">
              <span>Delivery Fee</span>
              <span>${getTotalCartAmount() === 0 ? 0 : 3}</span>
            </div>
            {appliedCoupon && (
              <div className="cart-summary-item discount">
                <span>Discount ({appliedCoupon.code})</span>
                <span>-${calculateDiscount().toFixed(2)}</span>
              </div>
            )}
            <div className="cart-summary-item total">
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
          <button
            className="checkout-btn"
            onClick={() =>
              navigate("/order", {
                state: {
                  finalTotal: calculateTotal(),
                  appliedCoupon: appliedCoupon,
                },
              })
            }
          >
            Proceed to Checkout
          </button>
          <div className="promo-code">
            <input
              type="text"
              placeholder="Enter Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button
              onClick={() => {
                const coupon = coupons.find((c) => c.code === promoCode);
                if (coupon) {
                  applyCoupon(coupon);
                } else {
                  alert("Invalid coupon code");
                }
              }}
            >
              Apply
            </button>
          </div>
          <div className="available-coupons">
            <h3>Available Coupons</h3>
            {coupons.map((coupon) => (
              <div key={coupon.code} className="coupon">
                <div>
                  <strong>{coupon.code}</strong>
                  <p>{coupon.description}</p>
                </div>
                <button onClick={() => applyCoupon(coupon)}>Apply</button>
              </div>
            ))}
          </div>
          {appliedCoupon && (
            <div className="applied-coupon">
              <p>Applied Coupon: {appliedCoupon.code}</p>
              <button onClick={removeCoupon}>Remove</button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
