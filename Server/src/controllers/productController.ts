import { Request, Response } from "express";
import * as productService from "../services/productService";

export const getProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await productService.getAllProducts();
    if (products.length > 0) {
      res.status(200).json({ products, message: "Products found" });
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const insertProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productData = req.body;
    const newProduct = await productService.createProduct(productData);
    console.log("newProduct:", newProduct);

    res
      .status(201)
      .json({ product: newProduct, message: "Product created successfully" });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productId = req.params.productId.trim();
    await productService.deleteProductById(productId);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productId = req.params.productId;
    const updateData = { ...req.body };
    const updatedProduct = await productService.updateProductById(
      productId,
      updateData
    );
    if (updatedProduct !== null) {
      res
        .status(200)
        .json({
          product: updatedProduct,
          message: "Product updated successfully",
        });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Server error" });
  }
};
