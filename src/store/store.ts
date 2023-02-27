import { computed, reactive } from "vue";
import { Product } from '../types/product';

type ProductInCart = {
    product: Product,
    amount: number,
};

type Store = {
    cart: ProductInCart[],
    addToCart: (product: Product, amount: number) => void,
    removeFromCart: (product: Product) => void,
};

export const store = reactive<Store>({
    cart: [],
    addToCart(product: Product, amount: number = 1) {
        if (amount >= 0) {
            const findIdx = this.cart.findIndex(({product: {name}}) => product.name === name);
            if (findIdx !== -1) {
                this.cart[findIdx].amount += amount;
            } else {
                this.cart.push({product, amount});
            }
        }   
    },
    removeFromCart(product) {
        this.cart = this.cart.filter(({product: {name}}) => name !== product.name);
    }
});

export const numOfItemsInCart = computed(() => {
    return store.cart.reduce((total, {amount}) => total + amount, 0);
});
