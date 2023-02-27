<script setup lang="ts">
import { ref } from 'vue';
import { parseIntWithFallback } from '../utils';

const props = defineProps<{
    value?: number, 
    onChange: (value: number) => void,
    min?: number,
    max?: number,
}>();

const currentValue = ref<number>(props.value ?? props.min ?? 0);

function onIncrement() {
    if (!props.max || currentValue.value < props.max) {
        currentValue.value++;
    }
    props.onChange(currentValue.value);
}

function onDecrement() {
    if (!props.min || currentValue.value > props.min) {
        currentValue.value--;
    }
    props.onChange(currentValue.value);
}

function onManualChange(e: Event) {
    const target = <HTMLInputElement>e.target;
    const newValue = parseIntWithFallback(target.value, 10, props.min ?? 0);
    currentValue.value = newValue;
    props.onChange(newValue);
}

</script>

<template>
    <div class="flex flex-row bg-light-gray-blue justify-between rounded-xl">
        <button aria-label="Decrement" class="group px-4 py-4" @click="onDecrement()">
            <svg class="fill-orange group-hover:fill-light-orange" width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill-rule="nonzero" xlink:href="#a"/></svg>
        </button>
        <input :min="min" :max="max" class="w-0 grow no-spinner py-4 text-dark-blue text-base font-bold text-center bg-light-gray-blue outline-none appearance-none" type="number" :value="currentValue" @change="onManualChange"/>
        <button aria-label="Increment" class="group px-4 py-4" @click="onIncrement()">
            <svg class="fill-orange group-hover:fill-light-orange" width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill-rule="nonzero" xlink:href="#b"/></svg>
        </button>
    </div>
</template>