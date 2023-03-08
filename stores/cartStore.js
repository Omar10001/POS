import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  getters: {
    cartTotal() {
      return this.cart.reduce((total, item) => {
        return total + item.price * item.quan;
      }, 0);
    },
    cartItemNo() {
      return this.cart.reduce((total, item) => {
        return total + item.quan;
      }, 0);
    },
  },
  actions: {
    async deleteFromCart(product) {
      this.cart = this.cart.filter((p) => {
        return p.id !== product.id;
      });
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    async incrementQuantity(product, quan) {
      let updatedProduct;
      this.cart = this.cart.map((p) => {
        if (p.id === product.id) {
          p.quan = p.quan + quan;
          updatedProduct = p;
        }
        return p;
      });
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    async decrementQuantity(product) {
      let updatedProduct;
      this.cart = this.cart.map((p) => {
        if (p.id === product.id && p.quan > 1) {
          p.quan--;
          updatedProduct = p;
        }
        return p;
      });
      if (updatedProduct) {
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },
    async addToCart(product, quan, notes) {
      const exists = this.cart.find((p) => p.id === product.id);

      if (exists) {
        this.incrementQuantity(product, quan);
      }
      if (!exists) {
        this.cart.push({ ...product, quan: quan, notes:notes });
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },
    async updateCart() {
      const data = JSON.parse(localStorage.getItem("cart")) || [];
      this.cart = data;
    },
    async emptyCart() {
      this.cart = [];
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
});

