<script setup lang="ts">
import Header from './components/Header.vue'
import ProductImages from './components/ProductImages.vue';
import { Product } from './types/product';
import { store } from './store/store'

const currentProduct: Product = {
  id: 1,
  brand: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description: "These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250,
  discount: 0.5,
  images: [
    { 
      imageFilename: "image-product-1.jpg", 
      thumbnailFilename: "image-product-1-thumbnail.jpg"
    }
  ],
};

function getPriceAsStr(price: number) {
  return new Intl.NumberFormat('en-US', {style: 'currency', currency: "USD"}).format(price);
}

function getDiscountedPrice(price: number, discount: number) {
  return price * discount;
} 

function getDiscountAsStr(discount: number) {
  return `${discount * 100}%`;
}

</script>

<template>
  <Header />
  <div class="flex flex-col md:flex-row md:mt-20 md:justify-evenly">
    <div class="h-[300px] md:h-full md:max-w-md"><ProductImages :images="currentProduct.images" /></div>
    <div class="p-6 md:max-w-md">
      <span class="text-orange uppercase text-base font-bold tracking-widest">{{ currentProduct.brand }}</span>
      <h2 class="text-3xl md:text-4xl font-bold mt-4">{{ currentProduct.name }}</h2>
      <p class="text-dark-gray-blue mt-4 md:mt-8 text-base">{{ currentProduct.description }}</p>
      <div class="flex flex-row md:flex-col mt-8">
        <div class="flex flex-row space-x-4 grow items-center">
          <span class="text-2xl font-bold">{{ getPriceAsStr(getDiscountedPrice(currentProduct.price, currentProduct.discount)) }}</span>
          <span><span class="text-lg font-bold text-orange bg-pale-orange rounded-lg p-1">{{ getDiscountAsStr(currentProduct.discount) }}</span></span>
        </div>
        <span class="self-start text-base text-gray-blue line-through">{{ getPriceAsStr(currentProduct.price )}}</span>
      </div>
      <div class="flex flex-col md:flex-row mt-8">
        <button @click="store.addToCart(currentProduct)"
        class="w-full bg-orange hover:bg-light-orange text-center text-white py-5 drop-shadow-lg rounded-lg text-base font-bold tracking-wide
        flex flex-row justify-center gap-4 items-center">
            <svg class="fill-white" width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero"/>
            </svg>
            <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>