import { Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  fullname: string;
  password: string;
  address: string;
  phone: string;
  email: string;
  status: string;
  roleId: string;
  createDate: Date;
  modifiedDate: Date;
}
