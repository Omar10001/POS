<template>
    <div class="flex flex-col gap-5">
      <div class=" w-full flex flex-wrap gap-3 justify-center">
        <Cats :cats="cats" />
      </div>
      <div class="flex w-full h-full justify-center items-start ">
        <Cards :items="items.value" />
        <Machine />
      </div>
    </div>
  </template>
  <script setup>
  import { useSearch } from "@/stores/search";
  import { ref, watchEffect } from "vue";
  const searchInput = useSearch();
  const { data: cats } = await useFetch('http://localhost:4000/categories')
  
  const items = ref([]);
  watchEffect(() => {
    if (searchInput.input.length > 0) {
      useFetch(`http://localhost:4000/products?q=${searchInput.input}`)
        .then(response => items.value = response.data)
    } else {
      useFetch('http://localhost:4000/products')
        .then(response => items.value = response.data)
    }
  })
  </script>
  