<template>
    <div v-for="(cat, index) in cats" :key="index"  class="">
        <button type="button" class="bg-white rounded-full w-[197.22px] px-4 py-1.5 hover:bg-[#0332e1] hover:text-white duration-200">
            {{ cat.cat }}
        </button>
    </div>
</template>
<script>
    export default {
  props: [
    'cats'
  ]
}


</script>