import { Document, ObjectId } from "mongoose";

export enum OrderDetailStatus {
  Pending = "pending",
  Confirmed = "confirmed",
  Cancelled = "cancelled",
}

export interface IOrderDetail extends Document {
  checkInData: Date;
  checkOutData: Date;
  price: Number;
  serviceId: ObjectId;
  orderId: ObjectId;
  RoomId: ObjectId;
  isCompleted: OrderDetailStatus;
  orderDetailStatus: String;
}
