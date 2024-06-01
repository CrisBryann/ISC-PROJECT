import express, { Router } from "express";
import userRouter from "./userRouter";
import feedbackRouter from "./feedbackRouter";
import serviceRouter from "./serviceRouter";
import authRouter from "./authRouter";
import paymentRouter from "./paymentRouter";
import productRouter from "./productRouter";
import orderRouter from "./orderRouter";

const router: Router = express.Router();
router.use("/user", userRouter);
router.use("/feedback", feedbackRouter);
router.use("/service", serviceRouter);
router.use("/auth", authRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);
router.use("/payment", paymentRouter);

export default router;
