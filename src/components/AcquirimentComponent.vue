<template>
  <section id="Orcamento" >
    <div
      class="bg-white dark:bg-gray-900"
    >
      <header
        class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative"
      >
        <a
          href="#"
          class="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
        >
          <span
            class="text-xs bg-blue-900 rounded-full text-white px-4 py-1.5 me-3"
            >Novidade</span
          >
          <span class="text-sm font-medium"
            >Clique aqui para simular o seu orçamento</span
          >
          <span class="material-icons-outlined">chevron_right</span>
        </a>
        <h1
          class="uppercase mb-4 text-4xl font-extrabold tracking-tight leading-none text-blue-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          We invest in the world’s potential
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200"
        >
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <form class="w-full max-w-md mx-auto" v-motion :initial="{opacity:0, scale:0.8}" :visible="{opacity:1, scale:1}">
          <label
            for="default-email"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Email sign-up</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
              <span class="material-icons-outlined">phone</span>
            </div>
            <input
              type="text"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Digite seu telefone e entraremos em contato"
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Enviar
            </button>
          </div>
        </form>
    </header>
      <div
        class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"
      ></div>
    </div>
    
  </section>
</template>
<script>
import WaveComponent from './WaveComponent.vue';

export default { components: { WaveComponent } };
</script>
<style lang=""></style>
