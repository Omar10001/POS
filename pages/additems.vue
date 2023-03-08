<template>
    <div class="w-full h-full min-h-screen flex flex-col justify-center items-center">
        <div class="w-[50%] py-14 flex flex-col justify-start items-center bg-[#0332e1] px-20  rounded-xl ">
            <span class="text-white text-3xl font-bold">Add Items</span>
            <form class="flex flex-col w-full gap-3" v-on:submit.prevent="handleContact">
                <label class="text-white" for='img'>Image Url</label>
                <input class="py-2 px-1 rounded-md" required v-model="addProd.img" name="name" type="text">

                <label class="text-white" for="name">Item's title</label>
                <input class="py-2 px-1 rounded-md" required v-model="addProd.name" name="name" type="text">
                <label class="text-white" for="Description">Description</label>
                <input class="py-2 px-1 rounded-md" required v-model="addProd.description" name="" type="text">
                <label class="text-white" for="Price">Price</label>
                <input class="py-2 px-1 rounded-md" required v-model="addProd.price" name="" type="text">
                <label class="text-white" for="Price">Category</label>
                <input class="py-2 px-1 rounded-md" required v-model="addProd.category" name="" type="text">
                <nuxt-link to="/">
                    <button class="text-white w-full border py-3 rounded-full" type="submit">Submit</button>
                </nuxt-link>
            </form>

        </div>

    </div>
</template>

<script setup>
const addProd = {
    name: "",
    img: "",
    description: "",
    price: 0,
    category: ""
}
const handleContact = async () => {
    try {
        const response = await fetch('http://localhost:4000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: addProd.name,
                price: addProd.price,
                img:addProd.img,
                category:addProd.category
            })
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
</script>
