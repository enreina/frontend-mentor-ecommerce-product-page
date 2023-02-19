
<script setup lang="ts">
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
</script>

<template>
    <header class="container mx-auto flex flex-row space-x-8 border-b box-content">
        <a class="flex items-center py-8" href="#"><img class="py-2" height="20px" src="../assets/logo.svg" /></a>
        <nav class="flex flex-grow space-x-4 items-center">
            <a v-for="link in navigationLinks" 
            class="py-9 text-darkGrayBlue border-b-transparent border-b-4 text-base
                hover:text-darkBlue hover:border-b-orange" 
            href="#">
                {{ link.title }}
            </a>
        </nav>
        <button><img src="../assets/icon-cart.svg"></button>
        <button><img class="w-14 h-14" src="../assets/image-avatar.png"></button>
    </header>
</template>