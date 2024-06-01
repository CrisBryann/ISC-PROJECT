import { OrderDetailStatus } from "./../types/orderDetail";
import mongoose, { Schema, Document, ObjectId } from "mongoose";

const OrderDetailSchema: Schema = new Schema(
  {
    checkInData: { type: Date, required: true, default: Date.now },
    checkOutData: { type: Date, required: true, default: Date.now },
    price: { type: Number, required: true },
    serviceId: { type: mongoose.Types.ObjectId, ref: "Service", require: true },
    orderId: {
      type: mongoose.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    roomId: {
      type: mongoose.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    isCompleted: { type: String, default: OrderDetailStatus.Pending },
  },
  { versionKey: false }
);

export default OrderDetailSchema;
