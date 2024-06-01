// src/controllers/userController.ts
import { NextFunction, Request, Response } from "express";
import { userService } from "../services/userService";
import { IUser } from "../types/user";
import { TPagination } from "../types/pagination";
import { User } from "../models";
import moment from "moment";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;

    const { page: _, limit: __, ...otherQueries } = req.query;

    const options = {
      page,
      limit,
      ...otherQueries,
    };

    const result: TPagination<IUser> = await userService.getUsers(options);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Service error" });
  }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId;
    const user = await userService.getUserById(userId);

    if (user) {
      res.status(200).json({ user, message: "User found" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const insertUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username, fullname, password, address, phone, email, roleId } =
      req.body;

    // Basic validation
    if (!username || !fullname || !password || !email || !roleId) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const nowInVietnam = moment.tz(Date(), "Asia/Ho_Chi_Minh").toDate();
    const existUser = await userService.findUserByUserName(username);

    if (existUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const newUser: IUser = new User({
      username,
      fullname,
      password,
      address,
      phone,
      email,
      status,
      roleId,
      createDate: nowInVietnam,
      modifiedDate: nowInVietnam,
    });

    const createdUser = await userService.insertUser(newUser);

    res
      .status(201)
      .json({ user: createdUser, message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.userId;
    const update = req.body;
    const updatedUser = await userService.updateUser(userId, update);
    if (updatedUser !== null) {
      res
        .status(200)
        .json({ user: updatedUser, message: "User updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error" });
  }
};
