import { DiscountTypeEnum } from "../enums/discountType";

export const getDiscountValueFromDiscountType = (
  discountType: DiscountTypeEnum
): number => {
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
};
