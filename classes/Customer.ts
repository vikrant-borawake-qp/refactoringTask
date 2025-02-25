class Customer {
  name: string;
  type: string; // "Regular", "Premium", "VIP"
  discount: number;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
    this.setDiscount();
  }

  setDiscount(): void {
    if (this.type === "Regular") {
      this.discount = 0.05;
    } else if (this.type === "Premium") {
      this.discount = 0.1;
    } else if (this.type === "VIP") {
      this.discount = 0.2;
    } else {
      this.discount = 0;
    }
  }
}
