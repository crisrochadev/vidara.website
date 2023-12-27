<template>
  <section class="dark:bg-gray-800 bg-gray-100 py-20" id="servicos">
    <TitleDescription
      title="Nossos Serviços"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi
        accusamus laboriosam reiciendis quae ducimus eveniet? Esse rerum
        excepturi cupiditate."
     
    />
    <article class="mx-[5%] flex gap-4 p-4 md:py-0 flex-wrap md:flex-nowrap my-2 md:h-[400px]">
      <header
        class="h-full w-full md:w-2/4 md:order-1 flex flex-col items-start justify-center order-2"
      >
        <h1 class="uppercase font-bold text-blue-800 dark:text-blue-200 text-2xl lg:text-4xl">
          Lorem Ipsum dolor ipcto
        </h1>
        <p class="dark:text-gray-100 text-gray-800 text-lg my-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
          praesentium libero autem corrupti fugiat mollitia.
        </p>
        <button
          type="button"
          class="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800"
        >
          Veja o portifólio
        </button>
      </header>
      <div class="w-full md:w-2/4 md:order-2 flex justify-center items-center" v-motion :initial="{opacity:0, x:-100}" :visible="{opacity:1,x:0}">
        <img src="/img/logo.png" alt="">
      </div>
    </article>
    <article class="mx-[5%]">
        <CardsComponent />
    </article>
  </section>
</template>
<script>
import CardsComponent from "./CardsComponent.vue";
import SlideServices from "./SlideServices.vue";
import TitleDescription from "./TitleDescription.vue";

export default {
  components: { TitleDescription, SlideServices, CardsComponent },
};
</script>
<style lang=""></style>
