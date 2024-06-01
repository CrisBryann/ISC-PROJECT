import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/user";

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  fullname: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: Boolean, default: true },
  roleId: { type: String, required: true },
  createDate: { type: Date, required: true, default: Date.now },
  modifiedDate: { type: Date, required: true, default: Date.now },
});

export default UserSchema;
