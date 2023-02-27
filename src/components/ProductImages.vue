<script setup lang="ts">
import { computed, ref } from 'vue';
import { ProductImage } from '../types/product';

const props = defineProps<{images: ProductImage[]}>();
const currentImageIdx = ref<number>(0);
const numberOfImages = props.images.length;
const transitionName = ref<"slide-left" | "slide-right">("slide-right");
const lightBoxMode = ref<boolean>(false);

function goToNextImage() {
    currentImageIdx.value = (currentImageIdx.value + 1) % numberOfImages;
    transitionName.value = "slide-right";
}   

function goToPrevImage() {
    if (currentImageIdx.value === 0) {
        currentImageIdx.value = numberOfImages - 1;
    } else {
        currentImageIdx.value = currentImageIdx.value - 1;
    }
    transitionName.value = "slide-left";
}

const currentImageSrc = computed<string>(() => {
    return `/product-images/${props.images[currentImageIdx.value].imageFilename}`;
})


</script>

<template>
    <!-- mobile -->
    <div class="md:hidden relative h-full overflow-hidden">
        <Transition :name="transitionName">
            <img class="object-cover w-full h-full md:rounded-2xl" :src="currentImageSrc" :key="currentImageIdx" />
        </Transition>
        <button @click="goToPrevImage()" class="group absolute left-0 top-1/2 -translate-y-1/2 ml-4 bg-white rounded-full w-8 h-8 flex justify-start items-center pl-2">
            <svg class="stroke-dark-blue group-hover:stroke-orange w-4" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </button>
        <button @click="goToNextImage()" class="group absolute right-0 top-1/2 -translate-y-1/2 mr-4 bg-white rounded-full w-8 h-8 flex justify-end items-center pr-2">
            <svg class="stroke-dark-blue group-hover:stroke-orange" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </button>
    </div>

    <!-- desktop -->
    <div class="hidden md:flex flex-col max-w-[445px]">
        <img class="object-cover w-full rounded-2xl cursor-pointer hover:opacity-50" @click="lightBoxMode = true" :src="currentImageSrc" />
        <div class="hidden md:flex flex-row h-24 gap-8 mt-8">
            <div class="cursor-pointer" v-for="{thumbnailFilename},idx in images" :key="idx" @click="currentImageIdx = idx">
                <img :src="`/product-images/${thumbnailFilename}`" class="w-full object-scale-down rounded-lg border-2 hover:opacity-50 hover:-translate-y-1 transition-all"
                :class="{
                    'border-transparent': idx !== currentImageIdx, 'border-orange': idx === currentImageIdx,
                    'opacity-50': idx === currentImageIdx,
                }" />
            </div>
        </div>
    </div>

    <!-- desktop light box -->
    <div v-if="lightBoxMode" class="hidden md:block fixed inset-0 h-screen w-screen bg-black/75 transition-opacity z-50" @click="lightBoxMode = false">
    </div>

    <div v-if="lightBoxMode" class="hidden md:flex flex-col fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg">
        <button @click="lightBoxMode = false" class="fill-white hover:fill-orange self-end">
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/></svg>
        </button>
        <div class="relative mt-8">
            <img :src="currentImageSrc" />
            <button @click="goToPrevImage()" class="group absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full w-8 h-8 flex justify-start items-center pl-2">
                <svg class="stroke-dark-blue group-hover:stroke-orange w-4" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </button>
            <button @click="goToNextImage()" class="group absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full w-8 h-8 flex justify-end items-center pr-2">
                <svg class="stroke-dark-blue group-hover:stroke-orange" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </button>
        </div>  
        <div class="hidden md:flex flex-row h-20 gap-6 mt-8 justify-evenly">
            <div class="cursor-pointer bg-white rounded-lg overflow-hidden hover:-translate-y-1 transition-all border-orange"
            :class="
            {
                'border-0': idx !== currentImageIdx, 
                'border-2': idx === currentImageIdx,
            }"
            v-for="{thumbnailFilename},idx in images" :key="idx" @click="currentImageIdx = idx">
                <img :src="`/product-images/${thumbnailFilename}`" class="h-full object-scale-down hover:opacity-50"
                :class="{'opacity-50': idx === currentImageIdx}" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.slide-right-leave-active, .slide-left-leave-active {
    @apply duration-1000;
    @apply transition;
}
.slide-right-enter-active, .slide-left-enter-active {
    @apply duration-1000;
    @apply transition;
    @apply delay-200;
}
.slide-right-enter, .slide-left-leave-to {
    @apply transform;
    @apply translate-x-full;
}
.slide-right-leave-to, .slide-left-enter {
    @apply transform;
    @apply -translate-x-full;
}
</style>