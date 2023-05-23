import express from "express";
import {
  getAdminOrders,
  getMyOrders,
  getOrderDetail,
  placeOrder,
  placeOrderOnline,
  processOrder,
} from "../controller/order.js";
import { authorizedAdmin, isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/createorder", isAuthenticated, placeOrder);

router.get("/createonlineorder", placeOrderOnline);
router.get("/myorders", isAuthenticated, getMyOrders);
export default router;

router.get("/order/:id", getOrderDetail);
  
//add admin middleware
router.get("/admin/orders", isAuthenticated, authorizedAdmin, getAdminOrders);
router.get("/admin/orders/:id", isAuthenticated, authorizedAdmin, processOrder);
