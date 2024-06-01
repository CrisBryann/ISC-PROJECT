import express, { Router } from "express";
import {
  deleteOrder,
  getOrder,
  insertOrder,
  updateOrder,
} from "../controllers/orderController";

const router: Router = express.Router();

router.get("/", getOrder);
router.post("/", insertOrder);
router.delete("/:orderId", deleteOrder);
router.patch("/:orderId", updateOrder);

export default router;
