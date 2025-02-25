import { DiscountTypeEnum } from "../enums/discountType";
import { getDiscountValueFromDiscountType } from "../util/discount.util";

export class Customer {
  private readonly customerName: string;
  private readonly discountType: DiscountTypeEnum; // "Regular", "Premium", "VIP"

  constructor(customerName: string, discountType: DiscountTypeEnum) {
    this.customerName = customerName;
    this.discountType = discountType;
  }

  getCustomerName(): string {
    return this.customerName;
  }

  getCustomerDiscountValue(): number {
    return getDiscountValueFromDiscountType(this.discountType);
  }
}
