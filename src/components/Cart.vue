<script setup lang="ts">
import { store } from '../store/store';
import { Product } from '../types/product';
import { getPriceAsStr, getDiscountedPrice } from '../utils';

const props = defineProps<{isOpen: boolean}>();

function getImageThumbnailUrl(product: Product) {
    return `/product-images/${product.images[0].thumbnailFilename}`;
}

function getDiscountedPriceAsStr(product: Product) {
    return getPriceAsStr(getDiscountedPrice(product.price, product.discount));
}

function getTotalPriceAsStr(product: Product, amount: number) {
    return getPriceAsStr(getDiscountedPrice(product.price, product.discount) * amount);
}
</script>

<template>
    <div class="absolute left-0 right-0 mx-2 mt-2 md:w-96 md:left-auto top-full bg-white rounded-lg drop-shadow-xl transition-[transform,visibility] z-50"
         :class="{'-translate-y-full': !isOpen, invisible: !isOpen, 'translate-y-0': isOpen}">
        <h1 class="text-md font-bold text-dark-blue p-6 border-b">Cart</h1>
        <div v-if="store.cart.length === 0" class="py-20 flex justify-center">
            <p class="text-dark-gray-blue text-md font-bold">Your cart is empty.</p>
        </div>
        <div v-else class="flex flex-col p-6 gap-6">
            <div class="flex flex-row gap-4 items-center" v-for="{product, amount} in store.cart" :key="product.id">
                <img class="w-12 h-12" :alt="`Product Image Thumbnail for ${product.name}`" :src="getImageThumbnailUrl(product)" />
                <div class="text-base text-dark-gray-blue grow">
                    <div>{{ product.name }}</div>
                    <div class="flex flex-row gap-2">{{ `${getDiscountedPriceAsStr(product)} x ${amount}` }}<span class="font-bold">{{ getTotalPriceAsStr(product, amount) }}</span></div>
                </div>
                <button @click="store.removeFromCart(product)">
                    <svg class="fill-dark-gray-blue hover:fill-dark-blue" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use  fill-rule="nonzero" xlink:href="#a"/>
                    </svg>
                </button>
            </div>
            <button
                class="w-full bg-orange hover:bg-light-orange text-center text-white py-5 drop-shadow-lg rounded-lg text-base font-bold tracking-wide
                flex flex-row justify-center gap-4 items-center">
            <span>Checkout</span>
        </button>
        </div>
    </div>
</template>