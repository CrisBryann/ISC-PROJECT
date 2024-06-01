import { Request, Response } from "express";
import moment from "moment-timezone";
import * as orderService from "../services/orderService";
import { IOrder } from "../types/order";
import Order from "../models/Order";

export const getOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders = await orderService.getAllOrders();
    console.log("Orders:", orders);
    if (orders.length > 0) {
      res.status(200).json({ orders, message: "Orders found" });
    } else {
      res.status(404).json({ message: "Orders not found" });
    }
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const insertOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const orderData: IOrder = req.body;
    console.log("orderData", orderData);
    const newOrder: IOrder = await orderService.createOrder(orderData);
    console.log("newOrder", newOrder);
    res.status(201).json({
      order: newOrder,
      message: "Order created successfully",
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const orderId = req.params.orderId.trim();
    await orderService.deleteOrderById(orderId);
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const orderId = req.params.orderId;
    const updateData = { ...req.body };
    const updatedOrder = await orderService.updateOrderById(
      orderId,
      updateData
    );
    if (updatedOrder !== null) {
      res.status(200).json({
        order: updatedOrder,
        message: "Order updated successfully",
      });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ message: "Server error" });
  }
};
