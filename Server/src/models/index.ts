import mongoose from "mongoose";
import { IUser } from "../types/user";
import UserSchema from "./User";
import { IFeedBack } from "../types/feedback";
import FeedBackSchema from "./FeedBack";
import { IService } from "../types/service";
import ServiceSchema from "./Service";
import { IProduct } from "../types/product";
import { IOrder } from "../types/order";
import { IOrderDetail } from "../types/orderDetail";
import OrderSchema from "./Order";
import OrderDetailSchema from "./OrderDetail";
import ProductSchema from "./Product";

const User = mongoose.model<IUser>("User", UserSchema, "User");
const Feedback = mongoose.model<IFeedBack>(
  "FeedBack",
  FeedBackSchema,
  "FeedBack"
);
const Service = mongoose.model<IService>("Service", ServiceSchema, "Service");
const Product = mongoose.model<IProduct>("Product", ProductSchema, "Product");
const Order = mongoose.model<IOrder>("Order", OrderSchema, "Order");
const OrderDetail = mongoose.model<IOrderDetail>(
  "OrderDetail",
  OrderDetailSchema,
  "OrderDetail"
);

export { User, Feedback, Service, Product, Order, OrderDetail };
