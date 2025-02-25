import { DiscountTypeEnum } from "../enums/discountType";
import { Customer } from "./Customer";
import { Order } from "./Order";

// Order Management System - Handles orders
export class OrderManagementSystem {
  static main(): void {
    const customer = new Customer("John Doe", DiscountTypeEnum.VIP);
    const order = new Order(customer);

    order.addItem({ itemName: "Laptop", price: 1000 });
    order.addItem({ itemName: "Mouse", price: 50 });
    order.addItem({ itemName: "Keyboard", price: 80 });

    order.printOrder();

    OrderManagementSystem.generateInvoice(order);
  }

  static generateInvoice(order: Order): void {
    console.log("Generating Invoice...");
    order.printOrder();
    console.log("Thank you for shopping with us!");
  }
}
