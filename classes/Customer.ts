import { DiscountTypeEnum } from "../enums/discountType";

export class Customer {
  customerName: string;
  discountType: DiscountTypeEnum; // "Regular", "Premium", "VIP"
  discount: number;

  constructor(customerName: string, discountType: DiscountTypeEnum) {
    this.customerName = customerName;
    this.discountType = discountType;
    this.setDiscount();
  }

  setDiscount(): void {
    this.discount = this.getDiscountValue(this.discountType);
  }

  getDiscountValue(discountType: DiscountTypeEnum): number {
    switch (discountType) {
      case DiscountTypeEnum.REGULAR:
        return 0.05;
      case DiscountTypeEnum.PREMIUM:
        return 0.1;
      case DiscountTypeEnum.VIP:
        return 0.2;
      default:
        return 0;
    }
  }
}
