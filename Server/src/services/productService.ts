import { Product } from "../models";
import { IProduct } from "../types/product";
import moment from "moment-timezone";

export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error("Error fetching products");
  }
};

export const createProduct = async (
  productData: IProduct
): Promise<IProduct> => {
  try {
    const nowInVietnam = moment.tz("Asia/Ho_Chi_Minh");
    const newProduct: IProduct = new Product({
      ...productData,
      create_date: nowInVietnam.toDate(),
      modified_date: nowInVietnam.toDate(),
    });
    console.log("newProduct", newProduct);
    await newProduct.save();
    return newProduct;
  } catch (error) {
    throw new Error("Error creating Product: " + error.message);
  }
};

export const deleteProductById = async (productId: string): Promise<void> => {
  try {
    await Product.findByIdAndDelete(productId);
  } catch (error) {
    throw new Error("Error deleting product");
  }
};

export const updateProductById = async (
  productId: string,
  updateData: Partial<IProduct>
): Promise<IProduct | null> => {
  try {
    const nowInVietnam = moment.tz(Date(), "Asia/Ho_Chi_Minh");
    updateData.modified_date = nowInVietnam.toDate();
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updateData,
      {
        new: true,
      }
    );
    return updatedProduct;
  } catch (error) {
    throw new Error("Error updating product");
  }
};
