<script setup lang="ts">
import Header from './components/Header.vue'
import ProductImages from './components/ProductImages.vue';
</script>

<template>
  <Header />
  <div class="flex flex-col md:flex-row md:mt-20 md:justify-evenly">
    <div class="h-[300px] md:h-full md:max-w-md"><ProductImages /></div>
    <div class="p-6 md:max-w-md">
      <span class="text-orange uppercase text-base font-bold tracking-widest">Sneaker Company</span>
      <h2 class="text-3xl md:text-4xl font-bold mt-4">Fall Limited Edition Sneakers</h2>
      <p class="text-dark-gray-blue mt-4 md:mt-8 text-base">These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      <div class="flex flex-row md:flex-col mt-8">
        <div class="flex flex-row space-x-4 grow items-center">
          <span class="text-2xl font-bold">$125.00</span>
          <span><span class="text-lg font-bold text-orange bg-pale-orange rounded-lg p-1">50%</span></span>
        </div>
        <span class="self-start text-base text-gray-blue line-through">$250.00</span>
      </div>
    </div>
  </div>
</template>