
<script setup lang="ts">
import { ref } from 'vue';

type NavigationLink = {
    title: string, 
    href: string,
};
const navigationLinks: NavigationLink[] = [
    {title: "Collections", href: "#"},
    {title: "Men", href: "#"},
    {title: "Women", href: "#"},
    {title: "About", href: "#"},
    {title: "Contact", href: "#"},
];

const isDrawerOpen = ref<boolean>(false);

</script>

<template>
    <header class="px-6 md:px-0 flex flex-row space-x-4 md:space-x-8 md:border-b box-content items-center">
        <button @click="isDrawerOpen = true" class="md:hidden fill-dark-gray-blue hover:fill-dark-blue">
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill-rule="evenodd"/></svg>
        </button> 
        <a class="grow md:grow-0 flex items-center py-4 md:py-8" href="#"><img class="py-2" height="20px" src="../assets/logo.svg" /></a>
        <nav class="hidden md:flex grow space-x-4 items-center">
            <a v-for="link in navigationLinks" 
            class="py-9 text-dark-gray-blue border-b-transparent border-b-4 text-base
                hover:text-dark-blue hover:border-b-orange" 
            href="#">
                {{ link.title }}
            </a>
        </nav>
        <button>
            <svg class="fill-dark-gray-blue hover:fill-dark-blue" width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero"/>
            </svg>
        </button>
        <button><img class="rounded-full border-2 border-transparent hover:border-orange w-8 h-8 md:w-14 md:h-14" src="../assets/image-avatar.png" /></button>
    </header>

    <div class="fixed inset-0 h-screen w-screen bg-black/75 transition-opacity md:hidden" 
        :class="{invisible: !isDrawerOpen, visible: isDrawerOpen, 'opacity-0': !isDrawerOpen, 'opacity-1': isDrawerOpen}"
        @click="isDrawerOpen = false">
    </div>

    <div class="fixed inset-0 bg-white h-screen p-6 transition-transform w-3/4 md:hidden" 
        :class="{'-translate-x-full': !isDrawerOpen, 'translate-x-0': isDrawerOpen}">
        <button @click="isDrawerOpen = false" class="fill-dark-gray-blue hover:fill-dark-blue">
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/></svg>
        </button>
        <nav class="flex flex-col gap-8 mt-14">
            <a v-for="link in navigationLinks" 
            class="text-dark-blue hover:text-dark-gray-blue text-lg font-bold" 
            href="#">
                {{ link.title }}
            </a>
        </nav>

    </div>
</template>