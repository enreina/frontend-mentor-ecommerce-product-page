<script setup lang="ts">
    const props = defineProps<{isOpen: boolean}>();
</script>

<template>
    <div class="absolute left-0 right-0 mx-2 mt-2 md:w-96 md:left-auto top-full bg-white rounded-lg drop-shadow-xl transition-[transform,visibility]"
         :class="{'-translate-y-full': !isOpen, invisible: !isOpen, 'translate-y-0': isOpen}">
        <h1 class="text-md font-bold text-dark-blue p-6 border-b">Cart</h1>
        <div class="py-20 flex justify-center">
            <p class="text-dark-gray-blue text-md font-bold">Your cart is empty.</p>
        </div>
    </div>
</template>