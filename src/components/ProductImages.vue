<script setup lang="ts">
import { ProductImage } from '../types/product';

const props = defineProps<{images: ProductImage[]}>();

</script>

<template>
    <img class="object-cover w-full h-full md:rounded-2xl" :src="`/product-images/${images[0].imageFilename}`" />
</template>