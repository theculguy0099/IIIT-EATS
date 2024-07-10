import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// placing user order for frontend
const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5174";

  try {
    const orderData = {
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      payment: false,  // Initialize payment as false
      status: "Pending"  // Initialize status as Pending
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 3 * 100 * 80,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });
    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { 
        payment: true,
        status: "Food Processing"  // Update status to Food Processing after successful payment
      });
      await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// users orders for frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId, payment: true });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Listing orders for Admin Panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ payment: true });  // Only fetch paid orders
    res.json({success: true, data: orders});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error"});
  }
};

// Api for updating order status
const updateStatus = async (req, res) => {
  try {
    const order = await orderModel.findById(req.body.orderId);
    if (order && order.payment) {
      order.status = req.body.status;
      await order.save();
      res.json({success: true, message: "Status Updated"});
    } else {
      res.json({success: false, message: "Order not found or not paid"});
    }
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error"});
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };