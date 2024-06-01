import mongoose, { Schema, Document, ObjectId } from "mongoose";
import { IOrder, OrderStatus } from "../types/order";

const OrderSchema: Schema = new Schema(
  {
    createDate: { type: Date, required: true, default: Date.now },
    modifiedDate: { type: Date, required: true, default: Date.now },
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    status: { type: String, default: OrderStatus.Pending },
    // bookingStatus: { type: String, enum: Object.values(BookingStatus) },
  },
  { versionKey: false }
);

export default OrderSchema;
