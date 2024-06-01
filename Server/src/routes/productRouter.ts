import express, { Router } from "express";
import {
  deleteProduct,
  getProduct,
  insertProduct,
  updateProduct,
} from "../controllers/productController";

const router: Router = express.Router();

router.get("/", getProduct);

router.post("/", insertProduct);

router.patch("/:productId", updateProduct);

router.delete("/:productId", deleteProduct);

export default router;
