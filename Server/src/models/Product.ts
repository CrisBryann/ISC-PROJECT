import mongoose, { Schema, Document, ObjectId } from "mongoose";
import { IProduct } from "../types/product";

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    title: { type: String, required: true },
    color: { type: String, required: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
    create_date: { type: Date, required: true, default: Date.now },
    modified_date: { type: Date, required: true, default: Date.now },
    categoryId: { type: Schema.Types.ObjectId, required: true },
    status: {
      type: String,
      enum: ["Available", "Unavailable"],
      default: "Available",
    },
  },
  { versionKey: false }
);

export default ProductSchema;
