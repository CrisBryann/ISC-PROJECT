import { Order } from "../models";
import { OrderStatus, IOrder } from "../types/order";
import moment from "moment-timezone";

export const getAllOrders = async (): Promise<IOrder[]> => {
  try {
    const orders = await Order.find();
    return orders;
  } catch (error) {
    throw new Error("Error fetching orders");
  }
};

export const createOrder = async (orderData: IOrder): Promise<IOrder> => {
  try {
    const nowInVietnam = moment.tz("Asia/Ho_Chi_Minh");
    const newOrder: IOrder = new Order({
      ...orderData,
      createDate: nowInVietnam.toDate(),
      modifiedDate: nowInVietnam.toDate(),
      status: OrderStatus.Pending,
    });
    console.log("newOrder", newOrder);
    await newOrder.save();
    return newOrder;
  } catch (error) {
    throw new Error(`Error creating order: ${error}`);
  }
};

export const deleteOrderById = async (orderId: string): Promise<void> => {
  try {
    await Order.findByIdAndDelete(orderId);
  } catch (error) {
    throw new Error("Error deleting order");
  }
};

export const updateOrderById = async (
  orderId: string,
  updateData: Partial<IOrder>
): Promise<IOrder | null> => {
  try {
    const nowInVietnam = moment.tz(Date(), "Asia/Ho_Chi_Minh");
    updateData.modifiedDate = nowInVietnam.toDate();
    const updatedOrder = await Order.findByIdAndUpdate(orderId, updateData, {
      new: true,
    });
    return updatedOrder;
  } catch (error) {
    throw new Error("Error updating order");
  }
};
