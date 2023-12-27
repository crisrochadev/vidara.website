<template>
  <!-- source https://github.com/themesberg/landwind -->

  <section class="bg-hero bg-cover bg-center dark:bg-hero-dark" id="home">
    <div
      class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"
    >
      <header class="relative z-40 mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4  text-3xl md:text-4xl font-extrabold leading-none tracking-tight  xl:text-6xl dark:text-white"
        >
          <span
            class="block text-[1.2em] drop-shadow-lg dark:text-pink-100 uppercase text-pink-700 text-center lg:text-left"
            >Vidara Websites
          </span>
          <span
            class="block text-center uppercase lg:text-left text-blue-800 dark:text-blue-100"
            >Criação de sites</span
          >
        </h1>

        <p
          class="max-w-2xl mb-6 text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-pink-100 text-center lg:text-left"
        >
          Seu negócio precisa de um site. Criação de sites em Rio Negrinho com
          alta perfomance é nossa expecialidade
        </p>

        <div
          class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
        >
          <a
            href="#contato"
            class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <span class="material-icons-outlined mr-2 text-blue-800"
              >phone</span
            >
            Entre em contato
          </a>

          <a
            href="#servicos"
         
            class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <span class="material-icons-outlined mr-2 text-pink-700"
              >computer</span
            >
            Veja nossos serviços
          </a>
        </div>
      </header>

      <article
        class="hidden lg:mt-0 lg:col-span-5 lg:flex relative z-40"
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :visible="{ opacity: 1, x: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :hovered="{ scale: 1.2 }"
        :delay="200"
      >
        <img ref="img_banner" src="/img/hero.svg" alt="hero image" />
      </article>
    </div>
    <WaveComponent color="dark:fill-gray-800 fill-white"/>
  </section>
</template>
<script>
import WaveComponent from "./WaveComponent.vue";

export default {
  components: { WaveComponent },
};
</script>
<style>
/* .home {
  background-image: url("../assets/banner.png");
  background-size: cover;
  background-position: center;
} */
/* .home-dark {
  background-image: url("../assets/banner-dark.png") !important;
  background-size: cover;
  background-position: center;
} */
.st0 {
  fill: #0acf83;
}

.st1 {
  fill: #a259ff;
}

.st2 {
  fill: #f24e1e;
}

.st3 {
  fill: #ff7262;
}

.st4 {
  fill: #1abcfe;
}
</style>
