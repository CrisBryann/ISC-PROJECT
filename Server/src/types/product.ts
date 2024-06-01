import { Document, ObjectId } from "mongoose";

export enum ProductStatus {
  Available = "Available",
  Unavailable = "Unavailable",
}

export interface IProduct extends Document {
  name: string;
  price: number;
  title: string;
  color: string;
  image: string;
  stock: number;
  description: string;
  create_date: Date;
  modified_date: Date;
  categoryId: ObjectId;
  status: ProductStatus;
}
