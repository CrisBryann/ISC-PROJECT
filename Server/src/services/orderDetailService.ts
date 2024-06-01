import { OrderDetail } from "../models";
import { OrderDetailStatus, IOrderDetail } from "../types/orderDetail";
import moment from "moment-timezone";

export const createOrderDetail = async (
  orderData: IOrderDetail
): Promise<IOrderDetail> => {
  try {
    const nowInVietnam = moment.tz("Asia/Ho_Chi_Minh");
    const newOrderDetail: IOrderDetail = new OrderDetail({
      ...orderData,
      createDate: nowInVietnam.toDate(),
      modifiedDate: nowInVietnam.toDate(),
      status: OrderDetailStatus.Pending,
    });
    console.log("newOrderDetail", newOrderDetail);
    await newOrderDetail.save();
    return newOrderDetail;
  } catch (error) {
    throw new Error(`Error creating Order Detail: ${error}`);
  }
};
