import { SerializedError } from "@reduxjs/toolkit";

export interface Menu {
  id: string;
  category_id: string;
  category_name: string;
  name: string;
  price: number;
}

export interface Coupon {
  id: string;
  name: string;
  discount_rate: number;
}

export interface StoreInfo {
  minimum_order_price: number;
  merchant_name: string;
  items: Menu[];
  discounts: Coupon[];
}

export interface MenuState {
  loading: boolean;
  data: StoreInfo | null;
  error: SerializedError | null;
}
