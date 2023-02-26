import { reactive } from "vue";
import { Product } from '../types/product';

type ProductInCart = {
    product: Product,
    amount: number,
};

type Store = {
    cart: ProductInCart[],
    addToCart: (product: Product) => void,
};

export const store = reactive<Store>({
    cart: [],
    addToCart(product) {
        const findIdx = this.cart.findIndex(({product: {name}}) => product.name === name);
        if (findIdx !== -1) {
            this.cart[findIdx].amount++;
        } else {
            this.cart.push({product, amount: 1});
        }
    }
});