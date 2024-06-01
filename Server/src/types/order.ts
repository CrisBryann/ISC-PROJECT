import { Document, ObjectId } from "mongoose";

export enum OrderStatus {
  Pending = "pending",
  Confirmed = "confirmed",
  Cancelled = "cancelled",
}

export interface IOrder extends Document {
  createDate: Date;
  modifiedDate: Date;
  userId: ObjectId;
  status: OrderStatus;
  orderStatus: String;
}
