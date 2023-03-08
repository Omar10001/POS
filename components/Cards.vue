<template>
    <div  class="w-[75%] h-full grid grid-cols-3 px-5 gap-5 ">
        <div v-for="(item, index) in items" :key="index" class="flex flex-col gap-3 w-full bg-white p-4 rounded-xl">
            <div class="relative w-full bg-[#e8c36d] rounded-lg">
                <div  class="w-full aspect-square rounded-md"  :style="`background-image: url(${item.img}); background-size:cover; background-position:center`">

                </div>
                <span class="absolute bottom-2 left-2 bg-white/60 backdrop-blur-md px-2 py-0.5 rounded-md text-sm ">
                    {{ item.category }}
                </span>
            </div>
            <span class="font-bold text-xl"> {{ item.name }}</span>
            <div class="flex justify-between items-center">
                <span class=" text-lg">
                    IQD {{ item.price }} 
                </span>
                <img @click="cartStore.addToCart(item, 1, '')" class="cursor-pointer w-8" src="/svg/add.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cartstore";
const cartStore = useCartStore();



</script>

<script>
export default {
    props: [
        'items'
    ]
}

</script>