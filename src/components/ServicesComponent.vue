<template>
  <section class="dark:bg-gray-800 bg-gray-100 py-20" id="nossos-servicos">
    <TitleDescription
      title="Nossos Serviços"
      description="Nosso compromisso é entregar serviços de qualidade excepcional, impulsionando a presença online e o sucesso de cada negócio local que atendemos."
    />
    <article
      class="mx-[5%] flex gap-4 p-4 md:py-0 flex-wrap md:flex-nowrap my-2 md:h-[400px]"
    >
      <header
        class="h-full w-full md:w-2/4 md:order-1 flex flex-col items-start justify-center order-2"
      >
        <h1
          class="uppercase font-bold text-blue-800 dark:text-blue-200 text-2xl lg:text-4xl"
        >
          Conheça Nossos Serviços
        </h1>
        <p class="dark:text-gray-100 text-gray-800 text-lg my-8">
          Descubra a excelência em nossos serviços. Clique abaixo para explorar
          projetos que destacam nosso compromisso com qualidade e inovação.
        </p>
        <a
        href="/recentes"
          type="button"
          class="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800"
        >
          Veja os trabalhos recentes
      </a>
      </header>
      <div
        class="w-full md:w-2/4  flex justify-center items-center order-2"
        
      >
        <ServiceAnimeComponent />
      </div>
    </article>
    <article class="mx-[5%]">
      <CardsComponent />
    </article>
  </section>
</template>
<script>
import CardsComponent from "./CardsComponent.vue";
import ServiceAnimeComponent from "./ServiceAnimeComponent.vue";
import SlideServices from "./SlideServices.vue";
import TitleDescription from "./TitleDescription.vue";

export default {
  components: { TitleDescription, SlideServices, CardsComponent, ServiceAnimeComponent },
};
</script>
<style lang=""></style>
