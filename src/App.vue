<script setup lang="ts">
import Header from './components/Header.vue'
import ProductImages from './components/ProductImages.vue';

type Product = {
  brand: string,
  name: string,
  description: string,
  price: number,
  discount: number,
};

const currentProduct: Product = {
  brand: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description: "These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250,
  discount: 0.5,
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
    <div class="h-[300px] md:h-full md:max-w-md"><ProductImages /></div>
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
    </div>
  </div>
</template>