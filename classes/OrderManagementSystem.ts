// Order Management System - Handles orders
class OrderManagementSystem {
  static main(): void {
    const customer = new Customer("John Doe", "VIP");
    const order = new Order(customer);

    order.addItem("Laptop", 1000);
    order.addItem("Mouse", 50);
    order.addItem("Keyboard", 80);

    order.printOrder();

    OrderManagementSystem.generateInvoice(order);
  }

  static generateInvoice(order: Order): void {
    console.log("Generating Invoice...");
    console.log(`Customer: ${order.customer.name}`);
    console.log(`Total: $${order.totalPrice}`);
    console.log(`Discounted Total: $${order.discountedPrice}`);
    console.log(`Items: ${order.items.join(", ")}`);
    console.log("Thank you for shopping with us!");
  }
}
