<template>
    <main class="items-center justify-around w-screen px-2 py-20 overflow-hidden root sm:h-screen md:py-0 md:flex">
        <div data-aos="fade-right" class="md:w-[40%]">
            <h1 class="text-4xl font-semibold md:text-5xl">
                Hi, <br> I'm Zwe Zar Ni,
            </h1>
            <h3 class="my-6 text-3xl md:text-4xl">
                <span class="text-primary">Secret Ingredient </span>to your web development.
            </h3>
            <p>
                Enhancing my expertise in both frontend and backend development, devoting plenty of time to practice and explore new concepts. Embracing continuous learning to deliver high-quality web solutions.
            </p>
            <a href="./zwezarni.pdf" download style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;" class="px-4 py-1.5 block w-fit my-6 text-white transition-all duration-500 border rounded-full bg-primary border-primary hover:bg-transparent hover:text-primary">Download CV</a>
        </div>
        <div data-aos="fade-left" class="relative p-4 my-8 md:my-0 md:w-1/3">
            <img class="z-50 rounded-full" src="@/assets/me.png" alt="">
        </div>
    </main>
</template>

<script setup>
</script>

<style scoped>
.root {
    background-image: url('@/assets/colors.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>