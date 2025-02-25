import { IItem } from "../types/IItem";
import { Customer } from "./Customer";

export class Order {
  customer: Customer;
  items: IItem[];
  totalPrice: number;
  discountedPrice: number;

  constructor(customer: Customer) {
    this.customer = customer;
    this.items = [];
    this.totalPrice = 0;
    this.discountedPrice = 0;
  }

  addItem(item: IItem): void {
    this.items.push(item);
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalPrice = this.items.reduce(
      (sum, { price: itemPrice }) => sum + itemPrice,
      0
    );
    this.applyDiscount();
  }

  applyDiscount(): void {
    this.discountedPrice =
      this.totalPrice - this.totalPrice * this.customer.discount;
  }

  printItems(): void {
    console.log("Items: ");
    this.items.forEach(({ itemName, price }) => {
      console.log(`Item Name: ${itemName} Item Price: ${price}`);
    });
  }

  printOrder(): void {
    console.log(`Customer: ${this.customer.customerName}`);
    this.printItems();
    console.log(`Total Price: ${this.totalPrice}`);
    console.log(`Discounted Price: ${this.discountedPrice}`);
  }
}
