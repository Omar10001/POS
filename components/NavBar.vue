<template>
    <div class="flex w-full h-full justify-between items-center px-5">
        <img class="mt-3" src="/svg/logo.svg" alt="">
        <div class="flex justify-center items-center  mt-3.5 gap-4">
            <a class="text-[#0332e1]" href="/additems">Add an item</a>
            <div class="relative w-[349px] h-[32px]">
                <input v-model="searchInput.input"
                    class="bg-white rounded-full w-full h-full px-8 py-4 border-2 focus:outline focus:outline-[#103ce2]  "
                    placeholder="Search" type="text">
                <img class="absolute inset-0 top-2.5 left-1.5 w-4" src="/svg/search.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useSearch } from "@/stores/search";
    const searchInput = useSearch();

</script>