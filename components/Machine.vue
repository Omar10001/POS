<template>
    <div class="w-[50%] min-h-screen pr-5 flex flex-col items-center relative ">
        <div class="w-full h-[287px] bg-[#0332e1] rounded-2xl flex flex-col justify-center items-center gap-2 pb-20">
            <span class="text-white text-4xl font-bold">Receipt</span>
            <span @click="cartStore.emptyCart" class="text-white cursor-pointer">Clear cart</span>
        </div>
        <div v-if="cartStore.cart.length > 0"
            class="bg-white w-[75%] h-fit absolute top-40 flex flex-col transition-all duration-200 p-3 gap-3 rounded-b-lg">
            <div v-for="item in cartStore.cart" :key="item.id"
                class="flex justify-between items-center text-lg font-semibold ">
                <span class="">{{ item.name }}</span>
                <div class="  flex gap-7">
                    <img @click="cartStore.incrementQuantity(item, 1)" class="cursor-pointer w-5 scale-200" src="/svg/addblck.svg" alt="">
                    <span>{{ item.quan }}</span>
                    <img v-if="item.quan > 1" @click="cartStore.decrementQuantity(item, 1)" class="cursor-pointer w-5"  src="/svg/minus.svg" alt="">
                    <img class="cursor-pointer w-5" @click="cartStore.deleteFromCart(item)" v-else src="/svg/Trash.svg" alt="">
                </div>
                <span class=" text-right">{{ (item.quan * item.price).toLocaleString("en-US") }}</span>
            </div>
            <div class="w-full bg-black h-0.5"></div>
            <div class="flex justify-between text-xl">
                <span class="font-bold">Total</span>
                <span class="font-bold">{{ cartStore.cartTotal.toLocaleString("en-US") }}</span>
            </div>
            <button @click="warningModal = true" type="button"
                class="w-[50%] py-1.5 hover:bg-white border duration-200 hover:text-[#0332e1] border-[#0332e1] mx-auto text-white bg-[#0332e1] rounded-full">Confirm</button>
        </div>
    </div>

    <div v-if="warningModal"
        class="w-full h-full min-h-screen bg-black/50 backdrop-blur-sm fixed top-0 z-30 flex justify-center items-center text-2xl p-5">
        <div v-on-click-outside="handleDrawer"
            class="w-full max-w-[780px]  h-fit bg-[#f2f2f2] rounded-2xl flex flex-col justify-between items-center gap-6 text-3xl font-semibold text-center py-10 px-36">
            <span class="leading-7 mb-4">
                Finalize Purchase
            </span>
            <div v-for="item in cartStore.cart" :key="item.id"
                class="flex w-full border-b border-black px-3 justify-between items-center text-lg font-semibold ">
                <span class="w-[40.3%] text-left">{{ item.name }}</span>
                <div class=" w-[20%] flex gap-7">
                    <span>{{ item.quan }}</span>
                </div>
                <span class="w-[33.33%] text-right">{{ (item.quan * item.price).toLocaleString("en-US") }}</span>
            </div>

            <div class="flex justify-between items-center w-full">
                <span>Total:</span><span>{{ cartStore.cartTotal.toLocaleString("en-US") }}</span>
            </div>
            <input class="w-full bg-white rounded-full py-3 px-4 text-lg font-light  " placeholder="Given Money"
                v-model="givenMoney" type="number">
            <div class="flex justify-between w-full items-center">
                <span>Cash back:</span> <span>{{ cashBack }}</span>
            </div>
            <NuxtLink @click="printInvoice" class="w-72 bg-[#0332e1] text-white py-2 rounded-full text-xl" to="/">Finalize
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
import { vOnClickOutside } from "@vueuse/components";


import { useCartStore } from "@/stores/cartstore";
const cartStore = useCartStore();
const givenMoney = ref(0);


const warningModal = ref(false);
function handleDrawer() {
    warningModal.value = false;
}

const cashBack = computed(() => {
    const cashBackValue = givenMoney.value - cartStore.cartTotal;
    return (cashBackValue >= 0) ? cashBackValue.toLocaleString("en-US") : "0";
});
function printInvoice() {
    window.print();
}



</script>