<template>
    <div class="w-full flex justify-center bg-[#F7F6F7]">
        <div class="w-full max-w-[1280px] border-2 min-h-screen flex flex-col gap-5">
            <div class="w-full">
                <NavBar/>
            </div>
            <div class="w-full">
                <slot/>
            </div>
            <div class="w-full">
                <Foot/>
            </div>
        </div>
    </div>
</template>
<style>

</style>